import { Component, OnInit, Input } from '@angular/core';
import {
  User,
  PremiumModel,
  EsencialModel,
  Collections,
  Roles,
  TempranoModel,
  Premium2019Model, Zamna360_2019Model
} from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'epsi-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.scss']
})
export class UserRolesComponent implements OnInit {

  @Input() public user: User;

  public premiumModel: string[] = [ Roles.isPremium2020 ];
  public lightModel: string[] = [ Roles.isLight2020 ];

  public esencialModel: string[] = EsencialModel;
  public adminModel: string[] = [ Roles.Admin ];
  public tempranoModel: string[] = TempranoModel;
  public presencialModel: string[] = [ ...EsencialModel, Roles.Presencial, Roles.ZonaEnarm ];
  public premium2019Model: string[] = Premium2019Model;
  public zamna360_2019Model: string[] = Zamna360_2019Model;

  public l = false;

  public roles = Object.entries(Roles);

  constructor(
    private afs: AngularFirestore,
    private toastr: ToastrService,
    private modal: NgxSmartModalService
  ) { }

  ngOnInit() {
  }

  async modifyUserRoles(roles: string[], newValue: boolean) {

    console.log(roles, newValue);

    if (!this.user) { return; }
    this.l = true;

    // Build payload
    const payload = {};
    for (const role of roles) {
      payload[role] = newValue;
      this.user[role] = newValue;
    }

    await this.afs.collection(Collections.USER).doc(this.user.uid).update(payload);
    this.toastr.success('Roles cambios correctamente');
    this.l = false;

  }

}
