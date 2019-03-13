import { Component, OnInit } from '@angular/core'
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models'
import json2csv from 'json2csv'
import { AngularFirestore } from '@angular/fire/firestore'
import { Collections, User, Roles } from 'src/app/app.models'
import { take } from 'rxjs/operators'
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Router } from '@angular/router';

@Component({
  selector: 'epsi-admin-users-page',
  templateUrl: './admin-users-page.component.html',
  styleUrls: ['./admin-users-page.component.scss']
})
export class AdminUsersPageComponent implements OnInit {

  public tempUser: User

  private fields: string[] = [
    'uid',
    'displayName',
    'email',
    'celular',
    'universidad',
    'especialidad',
    'new_email',
    'photoURL',
    Roles.Admin,
    Roles.Esencial,
    Roles.Premium,
  ]

  public config: CrudTableConfig<User> = {
    collection: Collections.USER,
    disableAdd: true,
    pk: 'uid',
    headers: [
      {field: 'displayName', type: 'text', label: 'Nombre', noEdit: true},
      {field: 'email', type: 'email', label: 'Email', noEdit: true},
      {field: 'universidad', type: 'text', label: 'Universidad'},
      {field: 'photoURL', type: 'text', label: 'Foto', customHTML: (row, i) => {
        if (!row.photoURL) return '-'
        if (row.photoURL.includes('api.zamna')) return '-'
        return `<img src="${row.photoURL}" style="width:32px">`
      }, noEdit: true},
      {field: 'check', type: 'checkbox', customHTML: row => row.check ? '<i class="fa fa-check" style="color:green"><i>' : ''},
      {field: 'roles', type: 'text', noEdit: true, customRender: row => `
      ${row.isAdmin ? 'isAdmin ' : ''}
      ${row.isEsencial ? 'isEsencial ' : ''}
      ${row.isTemprano ? 'isTemprano ' : ''}
      `}
    ],
    customActions: [
      {iconClasses: 'fa fa-lock', handler: user => this.openEditRoles(user)},
      {iconClasses: 'fa fa-bar-chart', handler: user => this.openUserStat(user)}
    ]
  }

  constructor(
    private afs: AngularFirestore,
    private modal: NgxSmartModalService,
    private router: Router
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

    const csv = parser.parse(users.map(user => {
      return {
        ...user,

      }
    }))
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

  openEditRoles(user: User) {
    this.tempUser = user
    this.modal.getModal('userRolesModal').open()
  }

  openUserStat(user: User) {
    this.router.navigate(['/admin/user/stats', user.uid])
  }

}
