import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { Collections, ExamTypes, Exam, HomeLists } from 'src/app/app.models';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { StatsService } from 'src/app/services/stats.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'epsi-admin-exams',
  templateUrl: './admin-exams.component.html',
  styleUrls: ['./admin-exams.component.scss']
})
export class AdminExamsComponent implements OnInit {

  public config: CrudTableConfig<Exam> = {
    collection: Collections.EXAM,
    dataSource: this.afs.collection<Exam>(Collections.EXAM, ref => ref.where('type', '==', ExamTypes.PRECLASE)).valueChanges(),
    disableEdit: true,
    headers: [
      {field: 'name', type: 'text', label: 'Nombre'},
      {field: 'desc', type: 'text', label: 'Descripción', customRender: row => row.desc.substr(0, 100)},
      {field: 'type', type: 'text', label: 'Tipo de Exámen'},
      {field: 'questions', type: 'number', label: 'Preguntas', customRender: row => row.questions ? row.questions.length : 0}
    ],
    documentDefaults: {
      name: 'Nuevo Exámen',
      desc: '.',
      type: ExamTypes.SIMULADOR,
      questions: [],
      date: new Date().toISOString()
    },
    customActions: [
      {iconClasses: 'fa fa-edit', handler: row => this.openEdit(row)}
    ],
    postCreate: <Exam>(exam) => {
      // Register entity to HomeList
      console.log('adding new exam', exam.name, exam.type)
      if (exam.type == ExamTypes.SIMULADOR) this.stats.addToList(HomeLists.SimuladoresList, {id: exam.id, name: exam.name, type: exam.type})
      if (exam.type == ExamTypes.SIMULACRO) this.stats.addToList(HomeLists.SimulacrosList, {id: exam.id, name: exam.name, type: exam.type})
    },
    postEdit: (exam: Exam, oldItem: Exam) => {

      let old_list_id = HomeLists.SimuladoresList
      if (oldItem.type == ExamTypes.SIMULADOR) old_list_id = HomeLists.SimuladoresList
      if (oldItem.type == ExamTypes.SIMULACRO) old_list_id = HomeLists.SimulacrosList

      if (exam.type == ExamTypes.SIMULADOR) this.stats.updateListEntry(HomeLists.SimuladoresList, {id: exam.id, name: exam.name, type: exam.type}, old_list_id, oldItem)
      if (exam.type == ExamTypes.SIMULACRO) this.stats.updateListEntry(HomeLists.SimulacrosList, {id: exam.id, name: exam.name, type: exam.type}, old_list_id, oldItem)
    },
    postDelete: (id: string) => {
      this.stats.removeFromList(HomeLists.SimuladoresList, {id})
      this.stats.removeFromList(HomeLists.SimulacrosList, {id})
    },
  }

  public tempExam: Exam

  constructor(
    private modal: NgxSmartModalService,
    private stats: StatsService,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
  }

  openEdit(exam: Exam) {
    this.tempExam = exam
    this.modal.getModal('examEditModal').open()
  }

}
