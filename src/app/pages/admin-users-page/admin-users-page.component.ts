import { Component, OnInit } from '@angular/core'
import { CrudTableConfig } from 'src/app/shared/crud-table/crud-table-models'
import json2csv from 'json2csv'
import { AngularFirestore } from '@angular/fire/firestore'
import {Collections, User, Roles, MoodRate, Question} from 'src/app/app.models'
import { take } from 'rxjs/operators'
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import {StatsService} from "../../services/stats.service";
import { flattenDeep, uniq } from 'lodash';
import {from, of} from "rxjs";

@Component({
  selector: 'epsi-admin-users-page',
  templateUrl: './admin-users-page.component.html',
  styleUrls: ['./admin-users-page.component.scss']
})
export class AdminUsersPageComponent implements OnInit {

  public tempUser: User
  public tempRates: MoodRate[]

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
    dataSource: from(this.data.getCollectionAlt<User>(Collections.USER)),
    disableAdd: true,
    pk: 'uid',
    fullEdit: true,
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
        ${row.isPresencial? 'isPresencial ' : ''}
        ${row.isEsencial360? 'isEsencial360 ' : ''}
        ${row.isPremium360? 'isPremium360 ' : ''}
        ${row.isPremium2019? 'isPremium2019 ' : ''}
        ${row.is3602019? 'is3602019 ' : ''}
      `},
      {field: 'isAdmin', type: 'checkbox', hideOnTable: true},
      {field: 'isEsencial', type: 'checkbox', hideOnTable: true},
      {field: 'isPremium', type: 'checkbox', hideOnTable: true},
      {field: 'isTemprano', type: 'checkbox', hideOnTable: true},
      {field: 'isPremium2019', type: 'checkbox', hideOnTable: true},
      {field: 'is3602019', type: 'checkbox', hideOnTable: true},
      {field: 'isEsencial360', type: 'checkbox', hideOnTable: true},
      {field: 'isPresencial', type: 'checkbox', hideOnTable: true},
      {field: 'isContent', type: 'checkbox', hideOnTable: true},
      {field: 'isChecklist', type: 'checkbox', hideOnTable: true},
      {field: 'isCalendar', type: 'checkbox', hideOnTable: true},
      {field: 'isSmartCalendar', type: 'checkbox', hideOnTable: true},
      {field: 'isTopUsers', type: 'checkbox', hideOnTable: true},
      {field: 'isGalleries', type: 'checkbox', hideOnTable: true},
      {field: 'isSimuladores', type: 'checkbox', hideOnTable: true},
      {field: 'isForum', type: 'checkbox', hideOnTable: true},
      {field: 'isStreaming', type: 'checkbox', hideOnTable: true},
      {field: 'isMedia', type: 'checkbox', hideOnTable: true},
      {field: 'isSlides', type: 'checkbox', hideOnTable: true},
      {field: 'isSimulacros', type: 'checkbox', hideOnTable: true},
      {field: 'isFeed', type: 'checkbox', hideOnTable: true},
      {field: 'isPrograma', type: 'checkbox', hideOnTable: true},
      {field: 'isPool', type: 'checkbox', hideOnTable: true},
      {field: 'isTagPool', type: 'checkbox', hideOnTable: true},
      {field: 'isZonaEnarm', type: 'checkbox', hideOnTable: true},

    ],
    customActions: [
      {iconClasses: 'fa fa-lock', handler: user => this.openEditRoles(user)},
      {iconClasses: 'fa fa-bar-chart', handler: user => this.openUserStat(user)},
      {iconClasses: 'fa fa-smile-o', handler: user => this.openMoodModal(user)},
      {iconClasses: 'fa fa-bell', handler: user => this.openNotiAddModal(user)},
    ]
  }

  constructor(
    private afs: AngularFirestore,
    private modal: NgxSmartModalService,
    private router: Router,
    private data: DataService,
    private stats: StatsService,
  ) { }

  ngOnInit() {
  }

  async exportPresenciales() {

    const _tags = await this.stats.getAllTagPresenciales();
    const tags = uniq(flattenDeep(flattenDeep(_tags).map((q: any) => q.tags)));
    return console.log(tags);

    const Json2csvParser = json2csv.Parser;
    const parser = new Json2csvParser({ fields: this.fields });

    const users = await this.afs.collection<User>(Collections.USER, ref => ref
      .where(Roles.Presencial, '==', true))
      .valueChanges()
      .pipe(
        take(1)
      ).toPromise();

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

  async openMoodModal(user: User) {
    const rates = await this.data.getCollectionQuery<MoodRate>(Collections.MOOD_RATE, ref => ref.where('user', '==', user.uid))
    this.tempRates = rates
    this.modal.getModal('userMoodModal').open()
  }

  openNotiAddModal(user: User) {
    this.tempUser = user
    this.modal.getModal('userNotiAdd').open()
  }

}
