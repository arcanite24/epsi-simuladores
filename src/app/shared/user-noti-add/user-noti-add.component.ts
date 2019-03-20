import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Collections, Notification } from 'src/app/app.models';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'epsi-user-noti-add',
  templateUrl: './user-noti-add.component.html',
  styleUrls: ['./user-noti-add.component.scss']
})
export class UserNotiAddComponent implements OnInit {

  @Input() public uid: string

  public addForm: FormGroup = this.fb.group({
    id: this.afs.createId(),
    title: '',
    text: '',
    date: new Date().toISOString(),
    isGlobal: false,
    user: null
  })

  constructor(
    private fb: FormBuilder,
    private afs: AngularFirestore,
    private modal: NgxSmartModalService
  ) { }

  ngOnInit() {
  }

  async submitForm(noti: Partial<Notification>) {

    this.addForm.patchValue({
      user: this.uid,
      date: new Date().toISOString(),
    })

    await this.afs.collection(Collections.NOTIFICATION).doc(noti.id).set(this.addForm.value)

    this.modal.getModal('userNotiAdd').close()
    this.addForm.reset({id: this.afs.createId()})


  }

}
