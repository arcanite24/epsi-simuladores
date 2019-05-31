import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { ExamResults, Collections } from 'src/app/app.models';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'epsi-admin-exam-stats-page',
  templateUrl: './admin-exam-stats-page.component.html',
  styleUrls: ['./admin-exam-stats-page.component.scss']
})
export class AdminExamStatsPageComponent implements OnInit {

  public info$: Observable<ExamResultStat>
  private id: string = this.route.snapshot.paramMap.get('id')

  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.generateInfo()
  }

  generateInfo() {

    this.info$ = this.afs.collection<ExamResults>(Collections.EXAM_RESULT, ref => ref
      .where('exam', '==', this.id))
      .valueChanges()
      .pipe(
        map(results => ({
          samples: results.length,
          mean: this.getExamAverage(results),
          questions: this.getQuestionsStats(results)
        }))
      )

  }

  private getExamAverage(results: ExamResults[]): number {
    return results.map(r => r.promedio).reduce((a, b) => a + b, 0) / results.length
  }

  private getQuestionsStats(results: ExamResults[]): {name: string, value: number, total: number, text: string, correctas: number}[] {

    let stats = {}

    for (const r of results) {
      Object.values(r.questions).forEach((q: any, i) => {

        if (!stats[i + 1]) {
          stats[i + 1] = {name: (i + 1).toString(), value: 0, total: 0, correctas: 0, text: q.raw.text}
        }

        stats[i + 1].total++
        if (q.correcta) stats[i + 1].correctas++

      })
    }

    return Object.values(stats).map((s: any) => ({name: s.name, value: s.correctas, total: s.total, text: s.text, correctas: s.correctas}))

  } 

}

interface ExamResultStat {
  samples: number
  mean: number,
  questions: {name: string, value: number, total: number, text: string, correctas: number}[]
}