import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { Collections, TagPool, Tag, Question, Exam, ExamTypes } from 'src/app/app.models';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'epsi-admin-tags-pool',
  templateUrl: './admin-tags-pool.component.html',
  styleUrls: ['./admin-tags-pool.component.scss']
})
export class AdminTagsPoolComponent implements OnInit {

  public config: CrudTableConfig<TagPool> = {
    collection: Collections.TAG_POOL,
    headers: [
      {field: 'name', type: 'string'},
      {field: 'tags', type: 'string'},
    ],
    disableEdit: true,
    customActions: [
      {iconClasses: 'fa fa-edit', handler: row => this.openEditTagPool(row)}
    ],
    documentDefaults: {
      name: 'Nuevo Tema',
      tags: [],
      questions: []
    },
    postCreate: (row: any) => this.openEditTagPool(row)
  }

  public editForm: FormGroup = this.fb.group({
    id: '',
    name: ['', Validators.required],
    tags: [[]],
    questions: [[]]
  })

  public loading: boolean = false
  public tags$: Observable<Tag[]> = this.afs.collection<Tag>(Collections.TAG).valueChanges()

  constructor(
    private modal: NgxSmartModalService,
    private fb: FormBuilder,
    private afs: AngularFirestore,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  openEditTagPool(pool: TagPool) {
    this.modal.getModal('poolEditModal').open()
    this.editForm.patchValue(pool)
  }

  async submitForm(pool: TagPool) {

    if (!this.editForm.valid) return this.toastr.error('Ingresa datos válidos...')
    this.loading = true

    const exam_id = await this.generateExam(pool.tags)
    pool.exam = exam_id

    await this.afs.collection(Collections.TAG_POOL).doc(pool.id).update(pool)

    this.modal.getModal('poolEditModal').close()
    this.loading = false

  }

  changeTags(tags: Tag[]) {
    this.editForm.patchValue({tags: tags.filter(t => t.selected).map(t => t.value)})
  }

  async generateExam(tags: string[]) {
    
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
        name: `Tags - ${this.editForm.value.name}`,
        desc: '.',
        type: ExamTypes.TAGS,
        isTags: true,
        questions
      }
  
      await this.afs.doc(`${Collections.EXAM}/${exam.id}`).set({...exam})

      return exam.id

  }

}
