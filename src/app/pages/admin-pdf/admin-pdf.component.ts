import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ToastrService } from 'ngx-toastr';
import { Collections, Content } from 'src/app/app.models';

@Component({
  selector: 'epsi-admin-pdf',
  templateUrl: './admin-pdf.component.html',
  styleUrls: ['./admin-pdf.component.scss']
})
export class AdminPdfComponent implements OnInit {

  public content$: Observable<Content[]>;
  public tempContent: Content;

  public tempId: string;

  constructor(
    private afs: AngularFirestore,
    private modal: NgxSmartModalService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {

    this.content$ = this.afs.collection<Content>('content', ref => ref.where('isPdf', '==', true)).valueChanges();

  }

  addContent() {
    this.modal.getModal('addContentModal').open();
  }

  async removeContent(id: string) {
    await this.afs.doc(`content/${id}`).delete();
    this.toastr.success('Contenido borrado correctamente.');
  }

  openRemoveModal(id: string) {
    this.tempId = id;
    this.modal.getModal('deleteContentModal').open();
  }

  openEdit(c: Content) {
    this.tempContent = c;
    this.modal.getModal('editContentModal').open();
  }

  openTree() {
    this.modal.getModal('treeContentModal').open();
  }

  async resetSortIndexes(content: Content[] = []) {

    const batch = this.afs.firestore.batch();
    console.log('reseting', content.length, 'indexes');

    for (const c of content) {
      if (!c.sortIndex) {
        const ref = this.afs.collection(Collections.CONTENT).doc(c.id).ref;
        batch.update(ref, {sortIndex: 0});
      }
    }

    await batch.commit();
    this.toastr.success('Sort indexes reseted to 0');
    console.log('finished reseting', content.length, 'indexes');

  }

}
