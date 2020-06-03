import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { Question, Collections } from 'src/app/app.models';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'epsi-admin-questions',
  templateUrl: './admin-questions.component.html',
  styleUrls: ['./admin-questions.component.scss']
})
export class AdminQuestionsComponent implements OnInit {

  public tempQuestion: Question

  public config: CrudTableConfig<Question> = {
    collection: 'question',
    dataSource: this.afs.collection<Question>(Collections.QUESTION).valueChanges(),
    disableEdit: true,
    headers: [
      {field: 'text', type: 'textarea', label: 'Texto', customRender: row => row.text.substr(0, 100)},
      /* {field: 'respuestas', type: 'number', label: 'Respuestas', customRender: row => row.respuestas.length} */
    ],
    documentDefaults: {
      text: 'Nueva Pregunta',
      respuestas: [],
      correcta: null,
      tags: []
    },
    customActions: [
      {iconClasses: 'fa fa-edit', handler: row => this.openEditQuestion(row)}
    ]
  }

  constructor(
    private modal: NgxSmartModalService,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
  }

  openEditQuestion(q: Question) {
    this.tempQuestion = q
    this.modal.getModal('questionEditModal').open()
  }

}
