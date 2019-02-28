import { Component, OnInit, Input } from '@angular/core';
import { User, PremiumModel, EsencialModel, Collections, Roles, TempranoModel } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'epsi-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.scss']
})
export class UserRolesComponent implements OnInit {

  @Input() public user: User
  
  public premiumModel: string[] = PremiumModel
  public esencialModel: string[] = EsencialModel
  public adminModel: string[] = [ Roles.Admin ]
  public tempranoModel: string[] = TempranoModel

  public l: boolean = false

  constructor(
    private afs: AngularFirestore,
    private toastr: ToastrService,
    private modal: NgxSmartModalService
  ) { }

  ngOnInit() {
  }

  async modifyUserRoles(roles: string[], newValue: boolean) {

    if (!this.user) return
    this.l = true
    
    // Build payload
    let payload = {}
    for (const role of roles) {
      payload[role] = newValue
    }

    await this.afs.collection(Collections.USER).doc(this.user.uid).update(payload)
    this.toastr.success('Roles cambios correctamente')
    this.modal.getModal('userRolesModal').close()
    this.l = false

  }

}
