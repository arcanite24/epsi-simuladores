import { NgxSmartModalService } from 'ngx-smart-modal';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';
import { Collections } from './../../app.models';
import { DataService } from 'src/app/services/data.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/app.models';

@Component({
  selector: 'epsi-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.scss']
})
export class CompleteProfileComponent implements OnInit {

  @Input() public uid: string;

  public userForm: FormGroup = this.fb.group({
    nombre_completo: ['', Validators.required],
    new_email: ['', Validators.required],
    celular: ['', Validators.required],
    lugar_origen: ['', Validators.required],
    edad: ['', Validators.required],
    entrar_uni: ['', Validators.required],
    primer_intento: ['', Validators.required],
    feedback: ['', Validators.required],
  });

  constructor(
    private data: DataService,
    private fb: FormBuilder,
    private afs: AngularFirestore,
    private toastr: ToastrService,
    private modal: NgxSmartModalService,
  ) { }

  ngOnInit() {
    if (this.uid) { this.loadUser(this.uid); }
  }

  async loadUser(uid: string) {
    const user = this.data.getDocAlt<User>(Collections.USER, uid);
    this.userForm.patchValue(user);
  }

  async saveInfo(info: Partial<User>) {

    console.log(info);

    try {
      await this.afs.collection(Collections.USER).doc(this.uid).update({...info});
      this.toastr.success('Gracias por enviar tu información');
      this.modal.getModal('profileModal').close();
    } catch (error) {
      this.toastr.error('Algo ocurrió al enviar tu información, intentalo más tarde');
    }

  }

}
