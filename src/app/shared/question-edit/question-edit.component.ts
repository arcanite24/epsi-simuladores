import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question, Answer, Tag, Collections } from 'src/app/app.models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs/operators';

@Component({
  selector: 'epsi-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.scss']
})
export class QuestionEditComponent implements OnInit {

  private _question: Question

  @Input()
  public set question(q: Question) { this.questionChanged(q) }
  public get question(): Question { return this._question }

  @Output() postEdit: EventEmitter<Question> = new EventEmitter()

  public editForm: FormGroup
  public respuestas$: Observable<Answer[]>
  public tags$: Observable<Tag[]>
  public tags: string[]
  public tempTags: any

  public searchTag = (text$: Observable<string>) => {
    if (!this.tags) return of([])
    return text$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        map(tag => tag.length < 2 ? [] : this.tags.filter(t => t.toLowerCase().indexOf(tag.toLowerCase()) > -1).slice(0, 10))
      )
  }

  constructor(
    private afs: AngularFirestore,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private modal: NgxSmartModalService
  ) {

    this.editForm = this.fb.group({
      id: ['', Validators.required],
      text: ['', Validators.required],
      feedback: [''],
      respuestas: [],
      correcta: null,
      tags: [[]],
      img: null,
    })

  }

  ngOnInit() {
    this.afs.collection<Tag>(Collections.TAG).valueChanges().subscribe(tags => this.tags = tags.map(t => t.value))
  }

  questionChanged(q: Question) {
    this._question = q
    if (this.editForm && q) {
      this.editForm.patchValue({...this._question, tags: q.tags ? q.tags : []})
      //this.respuestas$ = this.afs.collection<Answer>('answer', ref => ref.where('parent', '==', this._question.id)).valueChanges()
    }
  }

  async saveQuestion() {
    await this.afs.doc(`question/${this.editForm.value.id}`).set(this.editForm.value, {merge: true})
    this.postEdit.next(this.editForm.value)
  }

  async submitForm() {

    if (this.editForm.valid) {

      try {
        await this.afs.doc(`question/${this.editForm.value.id}`).set(this.editForm.value, {merge: true})
        this.postEdit.next(this.editForm.value)
        this.toastr.success('Pregunta editada correctamente.')
        this.modal.getModal('questionEditModal').close()
        this.editForm.reset({respuestas: [], tags: []})
      } catch (error) {
        console.log(error)
        this.toastr.error('Ocurrió un error al editar...')
      }

    } else {
      this.toastr.error('La información que ingresaste no es válida.')
    }

  }

  async addAnswer() {

    // Create local object
    const id = this.afs.createId()
    const answer: Answer = {
      id,
      text: 'Nueva Respuesta',
      parent: this._question.id
    }

    try {

      // Register to Firestore
      await this.afs.doc(`answer/${id}`).set({...answer})

      // Add it to current form
      this.editForm.patchValue({respuestas: [...this.editForm.value.respuestas, answer]})

      // TODO: Decide if we save the changes rn or until user press save button
      this.saveQuestion()

    } catch (error) {
      console.log(error)
      this.toastr.error('Ocurrió un error al agrega la respuesta...')
    }

  }

  answerRemoved(id: string) {
    this.editForm.patchValue({respuestas: this.editForm.value.respuestas.filter(r => r.id != id)})
    this.saveQuestion()
  }

  answerEdited(a: Answer) {
    // Replace old answer with new one
    this.editForm.patchValue({respuestas: this.editForm.value.respuestas.map(r => r.id == a.id ? a : r)})
    this.saveQuestion()
  }

  answerSelected(id: string) {
    this.editForm.patchValue({correcta: id})
    this.saveQuestion()
  }

  tagInputChanged(tag: string, tags: string[]) {

    if (this.tags.indexOf(tag) < 0) return this.toastr.error('Primero tienes que registrar el tag en la Base de Datos.')
    if (tags.indexOf(tag) >= 0) return this.toastr.error('Éste tag ya está registrado en la pregunta.')
    tags.push(tag)
    this.editForm.patchValue({tags})
    this.tempTags = null

  }
  
  async addNewTag(text: string) {
    const id = this.afs.createId()
    await this.afs.doc(`${Collections.TAG}/${id}`).set({
      id,
      value: text,
      display: text,
    })
    this.toastr.success('Tag agregado correctamente.')
    this.tempTags = null
  }

  removeTag(tag: string, tags: string[]) {
    tags.splice(tags.indexOf(tag), 1)
    this.editForm.patchValue({tags})
  }

}
