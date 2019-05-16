import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ExamResults, Collections, StatView, User, Tag, StatCounter, List, Question, Answer, QuestionStat, Exam } from '../app.models';
import { take, map, tap } from 'rxjs/operators';
import groupBy from 'lodash/groupBy'
import sortBy from 'lodash/sortBy'
import { flattenDeep, uniq } from 'lodash'
import moment from 'moment'
import { averageMultiplier } from '../app.config';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  private months: {key: string, label: string}[] = [
    {key: '01', label: 'Enero'},
    {key: '02', label: 'Febrero'},
    {key: '03', label: 'Marzo'},
    {key: '04', label: 'Abril'},
    {key: '05', label: 'Mayo'},
    {key: '06', label: 'Junio'},
    {key: '07', label: 'Julio'},
    {key: '08', label: 'Agosto'},
    {key: '09', label: 'Septiembre'},
    {key: '10', label: 'Octubre'},
    {key: '11', label: 'Noviembre'},
    {key: '12', label: 'Diciembre'},
  ]

  private results: ExamResults[]

  constructor(
    private afs: AngularFirestore,
    private data: DataService
  ) { }

  async modifyCustomCounter(key: string, label: string, delta: number) {

    const counter = await this.data.getDoc<StatCounter>(Collections.STAT_COUNTER, key)

    if (!counter) {

      await this.afs.collection(Collections.STAT_COUNTER).doc(key).set({
        id: key,
        key,
        label,
        value: 1,
        lastModified: new Date().toISOString(),
      })

    } else {

      await this.afs.collection(Collections.STAT_COUNTER).doc(key).update({
        value: counter.value += delta,
        lastModified: new Date().toISOString(),
      })

    }

  }

  // Stat Counter
  async modifyCounter(key: string, delta: number, exam?: Exam) {

    let counter = await this.afs.collection<StatCounter>(Collections.STAT_COUNTER, ref => ref
      .where('key', '==', key))
      .valueChanges()
      .pipe(
        take(1),
        map(counters => counters[0])
      )
      .toPromise()

    if (!counter) counter = {id: key, key, label: exam ? exam.name : key, value: 0, lastModified: new Date().toISOString()}
    if (counter.value != null) counter.value += delta

    await this.afs.doc(`${Collections.STAT_COUNTER}/${counter.id}`).set({
      value: counter.value, 
      lastModified: new Date().toISOString(), 
      exam: exam ? exam.name : null,
      id: counter.id,
      label: counter.label,
      key: counter.key
    }, {merge: true})

  }

  // Timeline
  async computeTimeline(tag: string, uid: string) {

    const year = moment().year()
    let cache = {
      timeline: {},
      total: 0,
    }

    const results: ExamResults[] = await this.afs.collection<ExamResults>(Collections.EXAM_RESULT, ref => ref
      .where('tags', 'array-contains', tag)
      .where('user', '==', uid))
      .valueChanges()
      .pipe(take(1))
      .toPromise()

    const grouped = groupBy(results, r => r.date.substr(0, 7))

    this.months.forEach(async m => {

      const key = `${year}-${m.key}`

      cache.timeline[m.label] = {
        mes: m,
        promedio: grouped[key] ? await this.computeUserTagAverageWithData(tag, uid, grouped[key]) : 0
      }
      
    })

    cache.total = results.length

    return {
      total: cache.total,
      timeline: sortBy(cache.timeline, (m: any) => m.mes.key)
    }

  }

  async computeUserAverageList(user: User) {
    
    const tags: string[] = await this.getAllTags()
    let list = []

    for (const tag of tags) {
      const tempAverage = await this.computeUserTagAverage(tag, user.uid)
      list.push({tag, promedio: tempAverage})
    }

    return list.filter(tag => !isNaN(tag.promedio) && tag.promedio <= 7)

  }

  async computeUserTagAverage(tag: string, uid: string): Promise<number> {

    if (!tag) return 0
    if (!uid) return 0

    if (!this.results) this.results = await this.afs.collection<ExamResults>(Collections.EXAM_RESULT, ref => ref
      .where('user', '==', uid))
    .valueChanges()
    .pipe(
      map(results => results.map(r => ({
        ...r, 
        tags: r.tags ? r.tags.map((tag: any) => {
          return tag ? typeof tag === 'object' ? tag.text : tag : null
        }).filter(t => t) : []
      }))),
      take(1),
    ).toPromise()

    /* console.log(this.results.map(r => r.tags)) */

    const total = flattenDeep(this.results.filter(r => r.tags && r.tags.includes(tag)).map(r => {
      return Object.values(r.questions).map((q: any) => ({tags: this.formatTags(q.raw.tags), correcta: q.correcta}))
    })).filter((q: any) => q.tags.includes(tag))

    /* console.log(tag, total.length, total.filter((q: any) => q.correcta).length, total) */

    return total.filter((q: any) => q.correcta).length / total.length

  }

  async computeUserTagAverageWithData(tag: string, uid: string, results: ExamResults[]): Promise<number> {
   
    if (!tag) return 0
    if (!uid) return 0

    results = results.map(r => ({
      ...r, 
      tags: r.tags ? r.tags.map((tag: any) => {
        return tag ? typeof tag === 'object' ? tag.text : tag : null
      }).filter(t => t) : []
    }))

    const total = flattenDeep(results.filter(r => r.tags && r.tags.includes(tag)).map(r => {
      return Object.values(r.questions).map((q: any) => ({tags: this.formatTags(q.raw.tags), correcta: q.correcta}))
    })).filter((q: any) => q.tags.includes(tag))

    /* console.log(tag, total.length, total.filter((q: any) => q.correcta).length, total) */

    return total.filter((q: any) => q.correcta).length / total.length

  }

  formatTags(tags: any): string[] {
    return tags ? tags.map(tag => tag ? (typeof tag === 'object' ? tag.text : tag) : null).filter(t => t) : []
  }

  async computeUserTagListAverage(tags: string[], uid: string): Promise<number> {

    let promedios: number[] = []

    for (const tag of tags) {
      const average = await this.computeUserTagAverage(tag, uid)
      promedios.push(average)
    }

    return promedios.reduce((a, b) => a + b, 0) / promedios.length

  }

  computeUserAverage(uid: string, month: boolean = false): Promise<number> {

    return this.afs.collection<ExamResults>(Collections.EXAM_RESULT, ref => ref.where('user', '==', uid))
      .valueChanges()
      .pipe(
        take(1),
        map(results => {

          const total = results.length

          if (month) {
            return results
              .filter(r => moment(r.date).isSameOrAfter(moment().startOf('month')) && moment(r.date).isSameOrBefore(moment().endOf('month')))
              .map((r: ExamResults) => r.promedio)
              .reduce((a, b) => a + b, 0) / total * averageMultiplier
          } else {
            return results.map((r: ExamResults) => r.promedio).reduce((a, b) => a + b, 0) / total * averageMultiplier
          }

        }),
        tap(async (average: number) => {
          this.afs.doc(`${Collections.USER}/${uid}`).update({promedio: average})
        })
      ).toPromise()

  }

  // Helpers
  calculateAverage(results: ExamResults[]) {
    return results.map(r => r.promedio).reduce((a, b) => a + b, 0) * averageMultiplier
  }

  async getAllTags(): Promise<string[]> {
    return this.afs.collection<Tag>(Collections.TAG)
    .valueChanges()
    .pipe(
      map(tags => tags.map(t => t.value) as string[]),
      take(1)
    ).toPromise()
  }

  async getAllTagPresenciales() {

    const exams = await this.data.getCollectionQuery<Exam>(Collections.EXAM, ref => ref.where('isPresencial', '==', true));
    const _tags = exams.map(e => e.questions);
    return uniq(flattenDeep(flattenDeep(_tags).map((q: Question) => q.tags)));

  }

  // Optimization Helpers
  async addToList<I>(list_id: string, item: I) {
    
    const key = `${Collections.LIST}/${list_id}`
    const list = await this.afs.doc<List>(key)
      .valueChanges()
      .pipe(
        take(1)
      ).toPromise()

    list.list.push(item)

    await this.afs.doc(key).update(list)

  }

  async updateListEntry(list_id: string, item: any, old_list_id: string, old_item: any) {

    this.removeFromList(old_list_id, old_item)

    const key = `${Collections.LIST}/${list_id}`
    const list = await this.afs.doc<List>(key)
      .valueChanges()
      .pipe(
        take(1)
      ).toPromise()

    list.list = list.list.map(i => {
      if (item.id == i.id) return item
      return i
    })

    await this.afs.doc(key).update(list)

  }

  async removeFromList(list_id: string, item: any) {

    const key = `${Collections.LIST}/${list_id}`
    const list = await this.afs.doc<List>(key)
      .valueChanges()
      .pipe(
        take(1)
      ).toPromise()

    list.list = list.list.filter(i => i.id != item.id)

    await this.afs.doc(key).update(list)

  }

  async updateQuestionStat(questions: Question[], answer: Answer) {

    for (const question of questions) {
      const key = `${Collections.QUESTION_STAT}/${question.id}`
      const stat = await this.afs.doc<QuestionStat>(key)
      .valueChanges()
      .pipe(
        take(1)
      ).toPromise()

      if (!stat) {
        await this.afs.doc<QuestionStat>(key).set({
          id: key,
          question,
          stat: { [answer.text]: 1 },
          total: 1
        })
      } else {

        let _stat = {...stat.stat}

        if (!_stat[answer.text]) {
          _stat[answer.text] = 1
        } else {
          _stat[answer.text] += 1
        }

        await this.afs.doc<QuestionStat>(key).update({
          stat: _stat,
          total: stat.total + 1
        })

      } 
    }

    return true

  }

  async registerRanking(exam: Exam, user: Partial<User>, promedio: number = 0) {

    const id = this.afs.createId()

    this.afs.collection(Collections.EXAM_RANKING).doc(id).set({
      id,
      exam: {
        id: exam.id,
        name: exam.name,
      },
      user: {
        displayName: user.displayName,
        uid: user.uid,
      },
      promedio,
      date: new Date().toISOString()
    })

    return id

  }

}
