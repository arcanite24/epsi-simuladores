import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { Collections } from 'src/app/app.models';

@Component({
  selector: 'epsi-admin-todo',
  templateUrl: './admin-todo.component.html',
  styleUrls: ['./admin-todo.component.scss']
})
export class AdminTodoComponent implements OnInit {

  public config: CrudTableConfig = {
    collection: Collections.TODO,
    fullEdit: true,
    headers: [
      {field: 'text', type: 'textarea', label: 'Tarea'},
      {field: 'completed', type: 'number', label: 'Veces Completada', noEdit: true}
    ],
    documentDefaults: {
      text: 'Nueva Tarea',
      completed: 0,
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
