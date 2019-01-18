import { Component, OnInit, Input } from '@angular/core';
import { Exam, ExamTypes, Collections, Question } from 'src/app/app.models';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'epsi-exam-edit',
  templateUrl: './exam-edit.component.html',
  styleUrls: ['./exam-edit.component.scss']
})
export class ExamEditComponent implements OnInit {

  private _exam: Exam
  public editForm: FormGroup
  public examTypes: string[] = Object.values(ExamTypes)

  @Input()
  public set exam(e: Exam) { this.examChanged(e) }
  public get exam(): Exam { return this._exam }

  constructor(
    private fb: FormBuilder,
    private afs: AngularFirestore,
    private toastr: ToastrService,
    private modal: NgxSmartModalService,
  ) { }

  ngOnInit() {

    this.editForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      desc: ['', Validators.required],
      type: ['', Validators.required],
      questions: [[]]
    })

  }

  examChanged(e: Exam) {
    this._exam = e
    if (this.editForm) this.editForm.patchValue(e)
  }

  async submitForm() {

    if (this.editForm.valid) {

      try {
        await this.afs.doc(`${Collections.EXAM}/${this.editForm.value.id}`).set(this.editForm.value, {merge: true})
        this.toastr.success('Exámen editado correctamente.')
        this.modal.getModal('examEditModal').close()
        this.editForm.reset()
      } catch (error) {
        console.log(error)
        this.toastr.error('Ocurrió un error al editar...')
      }

    } else {
      this.toastr.error('La información que ingresaste no es válida.')
    }

  }

  questionSelected({ id, text }) {
    if (!this.haveQuestion(id)) {
      this.editForm.patchValue({ questions: [...this.editForm.value.questions, {id, text}] })
      this.saveExam()
    } else {
      this.toastr.error('La pregunta ya ha sido agregada al exámen...')
      // TODO: Filtrar los resultados del SerachComp si ya están agregados...
    }
  }

  async saveExam() {
    this.editForm.patchValue(this.editForm.value)
    await this.afs.doc(`${Collections.EXAM}/${this.editForm.value.id}`).set(this.editForm.value, {merge: true})
  }

  haveQuestion(id: string) {
    if (!this.editForm.value) this.editForm.patchValue({questions: []})
    return this.editForm.value.questions.map(q => q.id).indexOf(id) >= 0
  }

  removePregunta({ id }) {
    if (!this.editForm.value.questions) return this.toastr.error('No hay preguntas ')
    this.editForm.patchValue({questions: this.editForm.value.questions.filter(q => q.id != id)})
    this.saveExam()
  }

}
