import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { Collections, ExamTypes, Exam } from 'src/app/app.models';
import { NgxSmartModalService } from 'ngx-smart-modal';

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
    ]
  }

  public tempExam: Exam

  constructor(
    private modal: NgxSmartModalService
  ) { }

  ngOnInit() {
  }

  openEdit(exam: Exam) {
    this.tempExam = exam
    this.modal.getModal('examEditModal').open()
  }

}
