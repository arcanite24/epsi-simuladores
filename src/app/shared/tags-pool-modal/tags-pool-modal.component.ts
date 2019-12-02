import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag, Collections, Question, Exam, ExamTypes, TagPool, Roles } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { flattenDeep } from 'lodash';

@Component({
  selector: 'epsi-tags-pool-modal',
  templateUrl: './tags-pool-modal.component.html',
  styleUrls: ['./tags-pool-modal.component.scss']
})
export class TagsPoolModalComponent implements OnInit {

  public loading = false;
  public tags$: Observable<Tag[]>;
  public pools$: Observable<TagPool[]> = this.afs.collection<TagPool>(Collections.TAG_POOL).valueChanges();

  constructor(
    private afs: AngularFirestore,
    private router: Router,
    private auth: AuthService,
    private data: DataService,
  ) { }

  ngOnInit() {
    this.tags$ = this.afs.collection<Tag>(Collections.TAG).valueChanges();
  }

  async generateExam(allTags: Tag[]) {

    if (this.loading) { return; }
    this.loading = true;

    const tags: string[] = allTags.filter(t => t.selected).map(t => t.value);

    let exams: Exam[] = [];

    if (this.auth.isPremium2020) {
      exams = await this.data.getCollectionAlt<Exam>(Collections.EXAM);
    } else {
      if (this.auth.isLight2020) {
        exams = await this.data.getCollectionQueryAlt<Exam>(Collections.EXAM, 'isLight', '==', true);
      } else {
        if (this.auth.isMedicinaInterna2020) {
          const cache = await this.data.getCollectionQueryAlt<Exam>(Collections.EXAM, 'unlockedBy', '==', Roles.isMedicinaInterna2020);
          exams = [...exams, ...cache];
        }

        if (this.auth.isPediatria2020) {
          const cache = await this.data.getCollectionQueryAlt<Exam>(Collections.EXAM, 'unlockedBy', '==', Roles.isPediatria2020);
          exams = [...exams, ...cache];
        }

        if (this.auth.isGineco2020) {
          const cache = await this.data.getCollectionQueryAlt<Exam>(Collections.EXAM, 'unlockedBy', '==', Roles.isGineco2020);
          exams = [...exams, ...cache];
        }

        if (this.auth.isCirugia2020) {
          const cache = await this.data.getCollectionQueryAlt<Exam>(Collections.EXAM, 'unlockedBy', '==', Roles.isCirugia2020);
          exams = [...exams, ...cache];
        }

        if (this.auth.isUrgencias2020) {
          const cache = await this.data.getCollectionQueryAlt<Exam>(Collections.EXAM, 'unlockedBy', '==', Roles.isUrgencias2020);
          exams = [...exams, ...cache];
        }
      }
    }

    let questions: Question[] = flattenDeep(exams
      .map(e => e.questions)) as Question[];

    questions = questions.filter(q => {

      if (!q.tags) { return false; }

      for (const tag of q.tags) {
        if (tags.indexOf(tag) >= 0) { return true; }
      }

      return false;

    });

    const exam: Exam = {
      id: this.afs.createId(),
      name: `Tags - ${Date.now()}`,
      desc: '.',
      type: ExamTypes.TAGS,
      isTags: true,
      questions
    };

    await this.afs.doc(`${Collections.EXAM}/${exam.id}`).set({...exam});
    await this.router.navigate(['/exam', exam.type, exam.id]);
    this.loading = false;

  }

}
