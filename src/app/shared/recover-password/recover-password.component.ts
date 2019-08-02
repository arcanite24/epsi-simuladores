import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'epsi-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {

  public email: string;

  constructor(
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private modal: NgxSmartModalService,
  ) { }

  ngOnInit() {
  }

  async sendMail(email: string) {
    await this.afAuth.auth.sendPasswordResetEmail(email);
    this.toastr.success('Acabamos de enviarte un email para recuperar tu contraseña a ' + email);
    this.modal.getModal('recoverPass').close();
  }

}
