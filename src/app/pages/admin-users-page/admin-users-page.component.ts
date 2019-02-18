import { Component, OnInit } from '@angular/core'
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models'
import json2csv from 'json2csv'
import { AngularFirestore } from '@angular/fire/firestore'
import { Collections, User } from 'src/app/app.models'
import { take } from 'rxjs/operators'

@Component({
  selector: 'epsi-admin-users-page',
  templateUrl: './admin-users-page.component.html',
  styleUrls: ['./admin-users-page.component.scss']
})
export class AdminUsersPageComponent implements OnInit {

  private fields: string[] = [
    'uid',
    'displayName',
    'email',
    'cellphone',
    'college',
    'especialidad',
    'new_email',
    'photoURL'
  ]

  public config: CrudTableConfig = {
    collection: 'user',
    disableAdd: true,
    disableEdit: true,
    showControls: false,
    headers: [
      {field: 'displayName', type: 'text', label: 'Nombre'},
      {field: 'email', type: 'email', label: 'Email'},
      {field: 'photoURL', type: 'text', label: 'Foto', customHTML: (row, i) => `<img src="${row.photoURL}" style="width:32px">`}
    ]
  }

  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
  }

  async exportUsers() {

    const Json2csvParser = json2csv.Parser
    const parser = new Json2csvParser({ fields: this.fields })

    const users = await this.afs.collection<User>(Collections.USER)
      .valueChanges()
      .pipe(
        take(1)
      ).toPromise()

    const csv = parser.parse(users)
    const exportedFilenmae = `zamnademy-users-${Date.now()}.csv`

    var blob = new Blob([csv], { type: 'text/csvcharset=utf-8' })
    if (navigator.msSaveBlob) {
        navigator.msSaveBlob(blob, exportedFilenmae)
    } else {
        const link = document.createElement("a")
        if (link.download !== undefined) {
            var url = URL.createObjectURL(blob)
            link.setAttribute("href", url)
            link.setAttribute("download", exportedFilenmae)
            link.style.visibility = 'hidden'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        }
    }

    /* const encodedUri = encodeURI(csv)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", "zamnademy-users.csv")
    link.click() */

  }

}
