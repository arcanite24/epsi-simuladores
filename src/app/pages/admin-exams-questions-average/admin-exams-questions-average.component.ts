import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Collections, Exam, ExamResults, Question} from "../../app.models";
import {AngularFirestore} from "@angular/fire/firestore";
import {map, tap} from "rxjs/operators";

@Component({
  selector: 'epsi-admin-exams-questions-average',
  templateUrl: './admin-exams-questions-average.component.html',
  styleUrls: ['./admin-exams-questions-average.component.scss']
})
export class AdminExamsQuestionsAverageComponent implements OnInit {

  public results = {};

  public id: string = this.route.snapshot.paramMap.get('id');
  private exam$: Observable<Exam> = this.afs.collection(Collections.EXAM).doc<Exam>(this.id).valueChanges();
  public results$: Observable<ExamResults[]> = this.afs.collection<ExamResults>(Collections.EXAM_RESULT, ref => ref
    .where('exam', '==', this.id))
    .valueChanges()
    .pipe(
      tap(results => {

        console.log(results[0]);

        results.forEach(r => {

          const questions = Object.values(r.questions);
          questions.forEach((q: any) => {

            if (!this.results[q.raw.id]) this.results[q.raw.id] = {
              text: q.raw.text,
              average: 0,
              total: 0,
            };

            if (q.correcta) this.results[q.raw.id].average++;
            this.results[q.raw.id].total++;

          })

        })

      })
    );

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
  ) { }

  ngOnInit() {
  }

  public get preguntas() {
    return Object.values(this.results)
  }

}
