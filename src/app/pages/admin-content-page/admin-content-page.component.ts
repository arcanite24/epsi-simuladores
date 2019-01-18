import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Content } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'epsi-admin-content-page',
  templateUrl: './admin-content-page.component.html',
  styleUrls: ['./admin-content-page.component.scss']
})
export class AdminContentPageComponent implements OnInit {

  public content$: Observable<Content[]>
  public tempContent: Content

  constructor(
    private afs: AngularFirestore,
    private modal: NgxSmartModalService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {

    this.content$ = this.afs.collection<Content>('content').valueChanges()

  }

  addContent() {
    this.modal.getModal('addContentModal').open()
  }

  async removeContent(id: string) {
    await this.afs.doc(`content/${id}`).delete()
    this.toastr.success('Contenido borrado correctamente.')
  }

  openEdit(c: Content) {
    this.tempContent = c
    this.modal.getModal('editContentModal').open()
  }

  openTree() {
    this.modal.getModal('treeContentModal').open()
  }

}
