import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { Collections, ExamTypes, Exam, HomeLists } from 'src/app/app.models';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'epsi-admin-exams',
  templateUrl: './admin-exams.component.html',
  styleUrls: ['./admin-exams.component.scss']
})
export class AdminExamsComponent implements OnInit {

  public config: CrudTableConfig = {
    collection: Collections.EXAM,
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
      type: ExamTypes.SIMULACRO,
      questions: []
    },
    customActions: [
      {iconClasses: 'fa fa-edit', handler: row => this.openEdit(row)}
    ],
    postCreate: <Exam>(exam) => {
      // Register entity to HomeList
      if (exam.type == ExamTypes.SIMULADOR) this.stats.addToList(HomeLists.SimuladoresList, {id: exam.id, name: exam.name, type: exam.type})
      if (exam.type == ExamTypes.SIMULACRO) this.stats.addToList(HomeLists.SimulacrosList, {id: exam.id, name: exam.name, type: exam.type})
    },
    postEdit: (exam: any) => {
      if (exam.type == ExamTypes.SIMULADOR) this.stats.updateListEntry(HomeLists.SimuladoresList, {id: exam.id, name: exam.name, type: exam.type})
      if (exam.type == ExamTypes.SIMULACRO) this.stats.updateListEntry(HomeLists.SimulacrosList, {id: exam.id, name: exam.name, type: exam.type})
    },
    postDelete: (exam: any) => {
      if (exam.type == ExamTypes.SIMULADOR) this.stats.removeFromList(HomeLists.SimuladoresList, {id: exam.id, name: exam.name, type: exam.type})
      if (exam.type == ExamTypes.SIMULACRO) this.stats.removeFromList(HomeLists.SimulacrosList, {id: exam.id, name: exam.name, type: exam.type})
    },
  }

  public tempExam: Exam

  constructor(
    private modal: NgxSmartModalService,
    private stats: StatsService
  ) { }

  ngOnInit() {
  }

  openEdit(exam: Exam) {
    this.tempExam = exam
    this.modal.getModal('examEditModal').open()
  }

}
