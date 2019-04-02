import { Component, OnInit, Input } from '@angular/core';
import { Exam, ExamTypes, Collections, Question, ContentTypes, Content } from 'src/app/app.models';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'epsi-exam-edit',
  templateUrl: './exam-edit.component.html',
  styleUrls: ['./exam-edit.component.scss']
})
export class ExamEditComponent implements OnInit {

  private _exam: Exam
  public editForm: FormGroup
  public examTypes: string[] = Object.values(ExamTypes)
  public contentTypes: string[] = ContentTypes
  public host: string = window.location.host

  public tempQuestion: Question

  public content$: Observable<Content[]> = this.afs.collection<Content>(Collections.CONTENT)
    .valueChanges()
    .pipe(
      map(content => content.map(c => ({...c, name: `${c.name} | ${c.type}`})))
    )

  @Input()
  public set exam(e: Exam) { this.examChanged(e) }
  public get exam(): Exam { return this._exam }

  public importExamId: string

  constructor(
    private fb: FormBuilder,
    private afs: AngularFirestore,
    private toastr: ToastrService,
    private modal: NgxSmartModalService,
    private scroll: ScrollToService,
    private data: DataService
  ) { }

  ngOnInit() {

    this.editForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      desc: ['', Validators.required],
      type: ['', Validators.required],
      content_type: '',
      content: null,
      duration: null,
      questions: [[]],
      isPrueba: false,
      liberado: null,
      date: null,
      showAd: false,
      adDesc: '',
      adHref: '',
      adButton: '',
      modalAdText: '',
      isLight: false,
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

  questionSelected(q: Question) {
    if (!this.haveQuestion(q.id)) {
      this.editForm.patchValue({ questions: [...this.editForm.value.questions, q] })
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

  onQuestionAdded(q: Question) {
    this.questionSelected(q)
  }

  openEditQuestion(q: Question, e?: HTMLElement) {
    this.tempQuestion = q
    this.modal.getModal('questionEditModal').open()
    if (e) setTimeout(() => this.scroll.scrollTo({target: 'questionEditModal'}), 300)
  }

  openAddQuestion() {
    this.modal.getModal('questionAddModal').open()
    setTimeout(() => this.scroll.scrollTo({target: 'questionAddModal'}), 300)
  }

  postEditQuestion(q: Question) {
    console.log('post edit question', q)
    this.editForm.patchValue({
      questions: this.editForm.value.questions.map(qq => q.id == qq.id ? q : qq)
    })
  }

  scrollTo(e: HTMLElement) {
    e.scrollIntoView({behavior: 'smooth'})
  }

  openImportExam() {
    this.modal.getModal('importExamModal').open()
    setTimeout(() => this.scroll.scrollTo({target: 'importExamModal'}), 300)
  }

  async importExam(id: string) {
    console.log('importing exam', id)
    const exam = await this.data.getDoc<Exam>(Collections.EXAM, id)
    this.editForm.patchValue({
      questions: [...this.editForm.value.questions, ...exam.questions]
    })
    this.modal.getModal('importExamModal').close()
  }

}
