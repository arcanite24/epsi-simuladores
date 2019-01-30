import { NgxSmartModalService } from 'ngx-smart-modal';
import { AngularFirestore } from '@angular/fire/firestore';
import { DomSanitizer } from '@angular/platform-browser';
import { CrudTableFullEditConfig, CrudTableHeader } from './../crud-table/crud-table-models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-crud-table-full-edit',
  templateUrl: './crud-table-full-edit.component.html',
  styleUrls: ['./crud-table-full-edit.component.scss']
})
export class CrudTableFullEditComponent implements OnInit {

  @Input() public edit: boolean = false
  @Input() public config: CrudTableFullEditConfig
  @Input() public row: any
  @Input() public i: number = -1

  @Input()
  public set newRow(row) { 
    this.cacheEdit = { ...row }; 
    this.row = { ...row } 
    console.log(row);
    
  }
  public get newRow() { return this.cacheEdit }

  public cacheEdit: any = {}
  public radioCache: any = {}

  public customEdits: string[] = [
    'checkbox',
    'image',
    'select',
    'select_alt',
    'select_multiple',
    'textarea'
  ]

  constructor(
    public sanitizer: DomSanitizer,
    private afs: AngularFirestore,
    private modal: NgxSmartModalService
  ) { }

  ngOnInit() {
    //this.cacheEdit = {...this.row}
  }

  saveChanges() {

    const pk = this.config.modelConfig.pk ? this.config.modelConfig.pk : 'id'

    // select_multiple formatting
    this.config.modelConfig.headers.filter(h => h.type == 'select_multiple').forEach(field => {

    })

    this.afs.collection(this.config.modelConfig.collection).doc(this.row[pk]).set(this.cacheEdit, {merge: true}).then(() => {
      this.cacheEdit = {}
      this.modal.getModal('fullEditModal').close()
    })
  }

  onChangeCheckbox(field: CrudTableHeader, options: any[]) {
    this.cacheEdit[field.field] = options.filter(opt => opt.selected)
  }

  // TODO: Checar si funciona bien esta wea, al parecer hay bugs cuando hay solo 1 elemento
  isChecked(option: any, values: any[]): boolean {

    if (!values) return false
    if (option.selected) return true

    // string
    if (typeof option == 'string') {
      return values.indexOf(option) >= 0
    } else if (typeof option == 'object') {
      // TODO: Implementar que se pueda escoger otra primary key que no sea 'id'
      return values.map(v => v.id).indexOf(option.id) >= 0
    } else {
      return false
    }

  }

  isCheckedRadio(option: any, value: any): boolean {
    if (!value) return false
    return typeof option == 'string' ? option == value : option.id == value.id
  }

}
