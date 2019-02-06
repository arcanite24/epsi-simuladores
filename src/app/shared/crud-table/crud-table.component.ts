import { Observable } from 'rxjs';
import { Component, OnInit, Input, Pipe, Injectable, PipeTransform } from '@angular/core';
import { CrudTableConfig, CrudTableFullEditConfig } from './crud-table-models';
import { AngularFirestore } from '@angular/fire/firestore';
import clone from 'lodash/clone'
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'adonalsium-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss']
})
export class CrudTableComponent implements OnInit {

  @Input() config: CrudTableConfig

  @Input() fullEditTitle: string

  public fullEditConfig: CrudTableFullEditConfig = {
    modelConfig: this.config,
    title: this.fullEditTitle
  }

  public data$: Observable<any>

  public cacheEdit: any = {}
  public selectCache: any = {}

  public customEdits: string[] = [
    'checkbox',
    'image',
    'select',
    'select_alt',
    'textarea'
  ]

  constructor(
    private afs: AngularFirestore,
    public sanitizer: DomSanitizer,
    private modal: NgxSmartModalService
  ) { }

  ngOnInit() {

    // Load the collection data
    this.data$ = this.afs.collection(this.config.collection).valueChanges()
    
    // Load fullEditConfig
    this.fullEditConfig.modelConfig = this.config

  }

  editRow(row: any) {

    this.cacheEdit = { ...row }
    console.log(this.cacheEdit, row);
    
    // TODO: Encontrar una mejor manera de parsear los booleans :p
    for (const key in this.cacheEdit) {
      if (this.cacheEdit[key] == 'true') this.cacheEdit[key] = true
      if (this.cacheEdit[key] == 'false') this.cacheEdit[key] = false
    }

    // Full edit mode handler
    if (this.config.fullEdit) {
      this.modal.getModal('fullEditModal').open()
    } else {
      row.edit = true
    }

  }

  saveChanges(row: any) {
    const pk = this.config.pk ? this.config.pk : 'id'
    console.log(this.cacheEdit);
    
    this.afs.collection(this.config.collection).doc(row[pk]).set(this.cacheEdit, {merge: true}).then(() => this.cacheEdit = {})
    row.edit = false
  }

  deleteRow(pk: string) {
    this.afs.collection(this.config.collection).doc(pk).delete()
  }

  addRow() {
    const pk = this.afs.createId()
    const pkKey = this.config.pk ? this.config.pk : 'id'
    let dummyItem = {[pkKey]: pk, ...this.config.documentDefaults}
    // TODO: Add support for Promises/Observables in Lifecycle functions
    if (this.config.preCreate) dummyItem = this.config.preCreate(dummyItem)
    this.afs.collection(this.config.collection).doc(pk).set(dummyItem)
  }

  onFinishUpload(url, row, field) {
    console.log(url, row, field);
    
  }

}

@Pipe({
  name: 'removeHiddenElements'
})
@Injectable()
export class RemoveHiddenPipe implements PipeTransform {
  transform(items: any[], field : string, value : string): any[] {  
    if (!items) return []
    return items.filter(item => !item.hideOnTable)
  }
}