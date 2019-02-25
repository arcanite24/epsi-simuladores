import { Component, OnInit, Input } from '@angular/core';
import { Content, Collections } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'epsi-content-error-add',
  templateUrl: './content-error-add.component.html',
  styleUrls: ['./content-error-add.component.scss']
})
export class ContentErrorAddComponent implements OnInit {

  @Input() public content: Content
  public text: string

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService,
    private toastr: ToastrService,
    private modal: NgxSmartModalService
  ) { }

  ngOnInit() {
  }

  async addError(text: string) {

    if (!text) return this.toastr.error('Ingresa una descripción del error...')

    const id = this.afs.createId()
    await this.afs.collection(Collections.CONTENT_ERROR).doc(id).set({
      id,
      text,
      user: this.auth.user,
      content: this.content
    })

    this.toastr.success('Gracias por enviar tus comentarios')
    this.modal.getModal('contentErrorModal').close()

  }
 
}
