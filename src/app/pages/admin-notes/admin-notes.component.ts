import { Component, OnInit } from '@angular/core';
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models';
import { Collections } from 'src/app/app.models';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'epsi-admin-notes',
  templateUrl: './admin-notes.component.html',
  styleUrls: ['./admin-notes.component.scss']
})
export class AdminNotesComponent implements OnInit {

  public config: CrudTableConfig

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {

    this.auth.user$.subscribe(user => {
      this.config = {
        collection: Collections.NOTE,
        fullEdit: true,
        headers: [
          {field: 'title', type: 'textarea', label: 'Titulo'},
          {field: 'text', type: 'textarea', label: 'Contenido', customRender: row => row.text ? row.text.substr(0, 100) : '-'},
          {field: 'parent_type', type: 'text', label: 'Tipo de Padre'},
          {field: 'parent_id', type: 'text', hideOnTable: true},
          {field: 'content_type', type: 'text', hideOnTable: true},
          {field: 'user', type: 'text', hideOnTable: true},
        ],
        documentDefaults: {
          title: 'Nueva Nota',
          text: '.',
          user: user.uid
        }
      }
    })

  }

}