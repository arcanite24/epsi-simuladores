import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ExamResults, Collections, StatView, User, Tag } from '../app.models';
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

}
