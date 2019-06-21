import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Collections, ExamResults, ExamTypes, Exam, User} from '../../app.models';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from '../../services/auth.service';
import {map, tap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import { orderBy } from 'lodash';
import { DataService } from 'src/app/services/data.service';
import json2csv from 'json2csv';

@Component({
  selector: 'epsi-admin-exam-results',
  templateUrl: './admin-exam-results.component.html',
  styleUrls: ['./admin-exam-results.component.scss']
})
export class AdminExamResultsComponent implements OnInit {
  public results$: Observable<ExamResults[] | any[]>;
  public id: string = this.route.snapshot.paramMap.get('id');

  public cache: ExamResults[];
  public filtering = false;

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService,
    private route: ActivatedRoute,
    private data: DataService
  ) {}

  ngOnInit() {
    this.loadResults();

    /* this.auth.user$.subscribe(user => {
      if (user && !this.results$) { this.results$ = this.afs.collection<ExamResults>(Collections.EXAM_RESULT, ref => ref
        .where('exam', '==', this.id))
        .valueChanges()
        .pipe(
          map(results => results.map(r => ({
            ...r,
            exam$: r.exam ? this.afs.collection(Collections.EXAM).doc(r.exam).valueChanges() : null,
            user$: r.user ? this.afs.collection(Collections.USER).doc(r.user).valueChanges() : null,
          }))),
          map(results => orderBy(results, 'promedio').reverse()),
        );
      }
    }); */
  }

  async loadResults(onlyPresenciales: boolean = false) {
    const results = await this.data.getCollectionQuery<ExamResults>(
      Collections.EXAM_RESULT,
      ref => ref.where('exam', '==', this.id)
    );

    const pop = results.map(r => ({
      ...r,
      user$: r.user
        ? this.data.getDocAlt<User>(Collections.USER, r.user)
        : null,
      exam$: r.exam ? this.data.getDocAlt<Exam>(Collections.EXAM, r.exam) : null
    }));

    const sorted = orderBy(pop, 'promedio').reverse();

    if (!onlyPresenciales) {
      this.results$ = of(sorted);
      this.cache = sorted;
    } else {
      const presenciales = [];

      for (const r of sorted) {
        const user = await r.user$;
        if (user.isPresencial) {
          presenciales.push(r);
        }
        if (user.is3602019) {
          presenciales.push(r);
        }
      }

      this.results$ = of(presenciales);
      this.cache = presenciales;
    }
  }

  async exportResults(results: ExamResults[] = []) {
    const data = [];

    for (const r of results) {
      const user = await r.user$;
      data.push({ user: user.displayName, promedio: r.promedio });
    }

    const exam = await this.data.getDocAlt<Exam>(Collections.EXAM, this.id);
    this.exportUsers(data, `zamnademy-results-${exam.name}-${Date.now()}.csv`);

  }

  async exportUsers(data: any[] = [], filename: string) {
    const Json2csvParser = json2csv.Parser;
    const parser = new Json2csvParser({ fields: ['user', 'promedio'] });

    const csv = parser.parse(data);
    const exportedFilenmae = filename;

    const blob = new Blob([csv], { type: 'text/csvcharset=utf-8' });
    if (navigator.msSaveBlob) {
      navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', exportedFilenmae);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

  }
}
