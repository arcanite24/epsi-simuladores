import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ExamResults, Collections, StatView, User, Tag, StatCounter, List, Question, Answer, QuestionStat, Exam } from '../app.models';
import { take, map, tap } from 'rxjs/operators';
import groupBy from 'lodash/groupBy'
import sortBy from 'lodash/sortBy'
import moment from 'moment'
import { averageMultiplier } from '../app.config';
import { Observable } from 'rxjs';

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

  constructor(
    private afs: AngularFirestore
  ) { }

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

    if (!counter) counter = {id: key, key, label: exam.name, value: 0, lastModified: new Date().toISOString()}
    if (counter.value) counter.value += delta

    await this.afs.doc(`${Collections.STAT_COUNTER}/${counter.id}`).update({value: counter.value, lastModified: new Date().toISOString(), exam: exam ? exam.name : null})

  }

  // Timeline
  async computeTimeline(tag: string) {

    const year = moment().year()
    let cache = {
      timeline: {},
      total: 0,
    }

    const results: ExamResults[] = await this.afs.collection<ExamResults>(Collections.EXAM_RESULT, ref => ref.where('tags', 'array-contains', tag))
      .valueChanges()
      .pipe(take(1))
      .toPromise()

    const grouped = groupBy(results, r => r.date.substr(0, 7))

    this.months.forEach(m => {

      const key = `${year}-${m.key}`

      cache.timeline[m.label] = {
        mes: m,
        promedio: grouped[key] ? this.calculateAverage(grouped[key]) : 0
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

    return list

  }

  async computeUserTagAverage(tag: string, uid: string): Promise<number> {
    return this.afs.collection<ExamResults>(Collections.EXAM_RESULT, ref => ref
        .where('user', '==', uid)
        .where('tags', 'array-contains', tag))
      .valueChanges()
      .pipe(
        map(results => results.map(r => r.promedio).reduce((a, b) => a + b, 0) / results.length * averageMultiplier),
        take(1)
      ).toPromise()
  }

  computeUserAverage(uid: string): Promise<number> {

    return this.afs.collection<ExamResults>(Collections.EXAM_RESULT, ref => ref.where('user', '==', uid))
      .valueChanges()
      .pipe(
        take(1),
        map(results => {
          const total = results.length
          return results.map((r: ExamResults) => r.promedio).reduce((a, b) => a + b, 0) / total * averageMultiplier
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

  async updateQuestionStat(question: Question, answer: Answer) {

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

    return true

  }

  async registerRanking(exam: Exam, user: User, promedio: number = 0) {

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

  }

}
