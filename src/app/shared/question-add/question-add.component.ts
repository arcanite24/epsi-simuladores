import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question, Answer, Tag, Collections } from 'src/app/app.models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs/operators';

@Component({
  selector: 'epsi-question-add',
  templateUrl: './question-add.component.html',
  styleUrls: ['./question-add.component.scss']
})
export class QuestionAddComponent implements OnInit {

  public addForm: FormGroup
  public respuestas$: Observable<Answer[]>
  public tags$: Observable<Tag[]>
  public tags: string[]
  public tempTags: any

  @Output() public questionAdded: EventEmitter<Question> = new EventEmitter()

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

    this.addForm = this.fb.group({
      id: [this.afs.createId(), Validators.required],
      text: ['', Validators.required],
      feedback: [''],
      respuestas: [[]],
      correcta: null,
      tags: [[]],
      img: null,
    })

  }

  ngOnInit() {
    this.afs.collection<Tag>(Collections.TAG).valueChanges().subscribe(tags => this.tags = tags.map(t => t.value))
  }

  async saveQuestion() {
    await this.afs.doc(`${Collections.QUESTION}/${this.addForm.value.id}`).set(this.addForm.value, {merge: true})
  }

  async submitForm() {

    if (this.addForm.valid) {

      try {
        console.log('question-add', this.addForm.value)
        await this.afs.doc(`${Collections.QUESTION}/${this.addForm.value.id}`).set(this.addForm.value)
        this.toastr.success('Pregunta agregada correctamente.')
        this.modal.getModal('questionAddModal').close()
        this.questionAdded.next(this.addForm.value)
        this.addForm.reset({id: this.afs.createId(), respuestas: [], tags: []})
      } catch (error) {
        console.log(error)
        this.toastr.error('Ocurrió un error al agregar la pregunta...')
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
      text: '',
      parent: this.addForm.value.id
    }

    try {

      // Register to Firestore
      await this.afs.doc(`${Collections.ANSWER}/${id}`).set({...answer})

      // Add it to current form
      this.addForm.patchValue({respuestas: [...this.addForm.value.respuestas, answer]})

      // TODO: Decide if we save the changes rn or until user press save button
      this.saveQuestion()

    } catch (error) {
      console.log(error)
      this.toastr.error('Ocurrió un error al agrega la respuesta...')
    }

  }

  answerRemoved(id: string) {
    this.addForm.patchValue({respuestas: this.addForm.value.respuestas.filter(r => r.id != id)})
    this.saveQuestion()
  }

  answerEdited(a: Answer) {
    // Replace old answer with new one
    this.addForm.patchValue({respuestas: this.addForm.value.respuestas.map(r => r.id == a.id ? a : r)})
    this.saveQuestion()
  }

  answerSelected(id: string) {
    this.addForm.patchValue({correcta: id})
    this.saveQuestion()
  }

  tagInputChanged(tag: string, tags: string[]) {

    if (this.tags.indexOf(tag) < 0) return this.toastr.error('Primero tienes que registrar el tag en la Base de Datos.')
    if (tags.indexOf(tag) >= 0) return this.toastr.error('Éste tag ya está registrado en la pregunta.')
    tags.push(tag)
    this.addForm.patchValue({tags})
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
    this.addForm.patchValue({tags})
  }

}
