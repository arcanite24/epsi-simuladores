import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag, Collections, Question, Exam, ExamTypes, TagPool, Roles } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { flattenDeep } from 'lodash';
import { TagsByRole } from 'src/app/app.config';
import { ContentVideoSuggestionAddComponent } from '../content-video-suggestion-add/content-video-suggestion-add.component';

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

  async getQuestionsByTags(tags: string[]): Promise<Question[]> {

    let cache = [];

    for (const tag of tags) {
      const q = await this.data.getCollectionQueryAlt(Collections.QUESTION, 'tags', 'array-contains', tag);
      cache = [...cache, ...q];
      console.log(q);
    }

    return cache;
  }

  async generateExam(allTags: Tag[]) {

    if (this.loading) { return; }
    this.loading = true;

    const tags: string[] = allTags.filter(t => t.selected).map(t => t.value);

    let exams: Exam[] = [];
    let questions: Question[] = [];

    if (this.auth.isPremium2020) {
      exams = await this.data.getCollectionAlt<Exam>(Collections.EXAM);
    } else {
      if (this.auth.isLight2020) {
        exams = await this.data.getCollectionQueryAlt<Exam>(Collections.EXAM, 'isLight', '==', true);
      } else {
        if (this.auth.isMedicinaInterna2020) {
          const cache = await this.getQuestionsByTags(TagsByRole[Roles.isMedicinaInterna2020]);
          questions = [...questions, ...cache];
        }

        if (this.auth.isPediatria2020) {
          const cache = await this.getQuestionsByTags(TagsByRole[Roles.isPediatria2020]);
          questions = [...questions, ...cache];
        }

        if (this.auth.isGineco2020) {
          const cache = await this.getQuestionsByTags(TagsByRole[Roles.isGineco2020]);
          questions = [...questions, ...cache];
        }

        if (this.auth.isCirugia2020) {
          const cache = await this.getQuestionsByTags(TagsByRole[Roles.isCirugia2020]);
          questions = [...questions, ...cache];
        }

        if (this.auth.isUrgencias2020) {
          const cache = await this.getQuestionsByTags(TagsByRole[Roles.isUrgencias2020]);
          questions = [...questions, ...cache];
        }
      }
    }

    questions = [...questions, ...flattenDeep(exams
      .map(e => e.questions)) as Question[]];

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
