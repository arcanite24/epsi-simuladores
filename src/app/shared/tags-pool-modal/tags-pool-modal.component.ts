import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag, Collections, Question, Exam, ExamTypes, TagPool } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'epsi-tags-pool-modal',
  templateUrl: './tags-pool-modal.component.html',
  styleUrls: ['./tags-pool-modal.component.scss']
})
export class TagsPoolModalComponent implements OnInit {

  public loading: boolean = false
  public tags$: Observable<Tag[]>
  public pools$: Observable<TagPool[]> = this.afs.collection<TagPool>(Collections.TAG_POOL).valueChanges()

  constructor(
    private afs: AngularFirestore,
    private router: Router
  ) { }

  ngOnInit() {
    this.tags$ = this.afs.collection<Tag>(Collections.TAG).valueChanges()
  }

  async generateExam(allTags: Tag[]) {

    if (this.loading) return
    this.loading = true

    const tags: string[] = allTags.filter(t => t.selected).map(t => t.value)
    const questions: Question[] = await this.afs.collection<Question>(Collections.QUESTION)
      .valueChanges()
      .pipe(
        take(1),
        map(questions => {
          return questions.filter(q => {

            if (!q.tags) return false

            for (const tag of q.tags) {
              if (tags.indexOf(tag) >= 0) return true
            }
  
            return false

          })
        })
      )
      .toPromise()

      let exam: Exam = {
        id: this.afs.createId(),
        name: `Tags - ${Date.now()}`,
        desc: '.',
        type: ExamTypes.TAGS,
        isTags: true,
        questions
      }
  
      await this.afs.doc(`${Collections.EXAM}/${exam.id}`).set({...exam})
      await this.router.navigate(['/exam', exam.type, exam.id])
      this.loading = false

  }

}
