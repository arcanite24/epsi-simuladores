import { Component, OnInit, Input } from '@angular/core';
import { Question, Answer } from 'src/app/app.models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Observable } from 'rxjs';

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

  public editForm: FormGroup
  public respuestas$: Observable<Answer[]>

  constructor(
    private afs: AngularFirestore,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private modal: NgxSmartModalService
  ) {

    this.editForm = this.fb.group({
      id: ['', Validators.required],
      text: ['', Validators.required],
      respuestas: [],
      correcta: null
    })

  }

  ngOnInit() {
  }

  questionChanged(q: Question) {
    this._question = q
    if (this.editForm && q) {
      this.editForm.patchValue(this._question)
      //this.respuestas$ = this.afs.collection<Answer>('answer', ref => ref.where('parent', '==', this._question.id)).valueChanges()
    }
  }

  async saveQuestion() {
    await this.afs.doc(`question/${this.editForm.value.id}`).set(this.editForm.value, {merge: true})
  }

  async submitForm() {

    if (this.editForm.valid) {

      try {
        await this.afs.doc(`question/${this.editForm.value.id}`).set(this.editForm.value, {merge: true})
        this.toastr.success('Pregunta editado correctamente.')
        this.modal.getModal('questionEditModal').close()
        this.editForm.reset()
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

}
