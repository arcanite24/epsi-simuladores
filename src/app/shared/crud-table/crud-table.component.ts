import { Observable } from 'rxjs';
import { Component, OnInit, Input, Pipe, Injectable, PipeTransform } from '@angular/core';
import { CrudTableConfig, CrudTableFullEditConfig } from './crud-table-models';
import { AngularFirestore } from '@angular/fire/firestore';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { map, tap } from 'rxjs/operators';
import { sortBy } from 'lodash';
import { DatabaseSync, Collections } from 'src/app/app.models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'adonalsium-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss']
})
export class CrudTableComponent implements OnInit {

  @Input() config: CrudTableConfig;
  @Input() fullEditTitle: string;

  // Pagination
  @Input() perPage = 20;
  @Input() total = 1;
  public pages: number[];
  public currentPage = 1;
  public lastItem: any;

  public sync: DatabaseSync;

  public fullEditConfig: CrudTableFullEditConfig = {
    modelConfig: this.config,
    title: this.fullEditTitle
  };

  public data$: Observable<any>;

  public cacheEdit: any = {};
  public selectCache: any = {};
  public oldItem: any;

  public customEdits: string[] = [
    'checkbox',
    'image',
    'select',
    'select_alt',
    'textarea',
    'array'
  ];

  constructor(
    public sanitizer: DomSanitizer,
    private afs: AngularFirestore,
    private modal: NgxSmartModalService,
    private data: DataService,
  ) { }

  ngOnInit() {
    this.setupTable();
  }

  get pk(): string {
    if (!this.config) { return 'id'; }
    if (!this.config.pk) { return 'id'; }
    return this.config.pk;
  }

  async setupTable() {

    // Load sync
    // await this.loadSync();
    console.log(this.config);

    // Load the collection data
    this.data$ = this.config.dataSource ?
      this.config.dataSource :
      this.afs.collection(this.config.collection)
        .valueChanges();

    // Load fullEditConfig
    this.fullEditConfig.modelConfig = this.config;

  }

  async loadSync() {

    const sync = await this.data.getDocAlt<DatabaseSync>(Collections.DatabaseSync, this.config.collection);
    console.log(sync);

    if (sync) {
      this.sync = sync;
      this.total = sync.total;
      this.pages = new Array(Math.ceil(this.total / this.perPage))
        .fill(0)
        .map((item, i) => i + 1);
      return this.total;
    } else {
      return null;
    }

  }

  async loadLast(id: string) {

  }

  prevPage() {
    this.currentPage--;
    this.data$ = this.afs.collection(this.config.collection, ref => ref.
      limit(this.total ? this.perPage : null)
      .orderBy(this.pk)
      .endBefore(this.lastItem[this.pk]))
      .valueChanges()
      .pipe(
        map(data => sortBy(data, 'createdAt')),
        tap(items => this.lastItem = items[items.length - 1]),
      );
  }

  nextPage() {
    this.currentPage++;
    this.data$ = this.afs.collection(this.config.collection, ref => ref.
      limit(this.total ? this.perPage : null)
      .orderBy(this.pk)
      .startAfter(this.lastItem[this.pk]))
      .valueChanges()
      .pipe(
        map(data => sortBy(data, 'createdAt')),
        tap(items => this.lastItem = items[items.length - 1]),
      );
  }

  editRow(row: any) {

    this.cacheEdit = { ...row };
    console.log(this.cacheEdit, row);

    // TODO: Encontrar una mejor manera de parsear los booleans :p
    for (const key in this.cacheEdit) {
      if (this.cacheEdit[key] === 'true') { this.cacheEdit[key] = true; }
      if (this.cacheEdit[key] === 'false') { this.cacheEdit[key] = false; }
    }

    // Full edit mode handler
    if (this.config.fullEdit) {
      this.modal.getModal('fullEditModal').open();
    } else {
      row.edit = true;
    }

    // Cahce old item
    this.oldItem = {...row};

  }

  async saveChanges(row: any) {
    const pk = this.config.pk ? this.config.pk : 'id';
    console.log(this.cacheEdit);

    this.afs.collection(this.config.collection).doc(row[pk]).set(this.cacheEdit, {merge: true}).then(() => this.cacheEdit = {});
    row.edit = false;

    // Callbacks
    if (this.config.postEdit) { this.config.postEdit(this.cacheEdit, this.oldItem); }

  }

  openDeleteModal(pk: string, collection: string) {
    this.modal.setModalData({pk, collection}, 'deleteModal', true);
    this.modal.getModal('deleteModal').open();
  }

  async closeDeleteModal() {
    const { pk, collection } = this.modal.getModalData('deleteModal');
    /* console.log(this.modal.getModalData('deleteModal')); */

    await this.deleteRow(pk, collection);
    this.modal.getModal('deleteModal').close();
  }

  async deleteRow(pk: string, collection?: string): Promise<boolean> {

    if (this.config.preDelete) { this.config.preDelete(pk); }

    await this.afs.collection(collection ? collection : this.config.collection).doc(pk).delete();

    if (this.config.postDelete) {
      this.config.postDelete(pk);
    }

    return true;

  }

  async addRow() {

    // Build initial object
    const pk = this.afs.createId();
    const pkKey = this.config.pk ? this.config.pk : 'id';
    let dummyItem = {[pkKey]: pk, ...this.config.documentDefaults};

    // Inject timestamp
    if (this.config.disableTimestamp !== false) { dummyItem.createdAt = new Date().toISOString(); }

    // TODO: Add support for Promises/Observables in Lifecycle functions
    if (this.config.preCreate) { dummyItem = this.config.preCreate(dummyItem); }

    // Register to Firestore
    await this.afs.collection(this.config.collection).doc(pk).set(dummyItem);

    // Callbacks
    if (this.config.postCreate) { this.config.postCreate(dummyItem); }

  }

  onFinishUpload(url, row, field) {
    console.log(url, row, field);

  }

  trackByFn(index: number, val: any) {
    return val.id;
  }

}

@Pipe({
  name: 'removeHiddenElements'
})
@Injectable()
export class RemoveHiddenPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if (!items) { return []; }
    return items.filter(item => !item.hideOnTable);
  }
}
