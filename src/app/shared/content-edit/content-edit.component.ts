import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Content, ContentTypes, Marker } from 'src/app/app.models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'epsi-content-edit',
  templateUrl: './content-edit.component.html',
  styleUrls: ['./content-edit.component.scss']
})
export class ContentEditComponent implements OnInit {

  @Input()
  set content(c: Content) { this.contentChanged(c); }
  get content(): Content { return this._content; }

  @Output() added: EventEmitter<any> = new EventEmitter();
  @Output() error: EventEmitter<any> = new EventEmitter();

  public _content: Content;

  public editForm: FormGroup;
  public contentTypes: string[] = ContentTypes;

  public tempParent: Content;

  public contents$: Observable<Content[]> = this.afs.collection<Content>('content').valueChanges();

  constructor(
    private fb: FormBuilder,
    private afs: AngularFirestore,
    private toastr: ToastrService,
    private modal: NgxSmartModalService
  ) { }

  ngOnInit() {

    this.editForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      cover: null,
      parent_id: [null],
      parent_type: [null],
      video: null,
      markers: [[]],
      roles: [[]],
      model_slug: null,
      forum: null,
      sortIndex: null,
      event: null,
      is360: false,
      ignoreOnSmartCalendar: false,
      exam: null,
    });

  }

  public get content_url(): string {
    if (!this.editForm) { return ''; }
    if (!this.editForm.value) { return ''; }
    return `/content/${this.editForm.value.type}/${this.editForm.value.id}`;
  }

  contentChanged(c: Content) {
    if (c && !c.roles) { c.roles = []; }
    this._content = c;
    console.log('content edit', c);
    if (this.editForm) { this.editForm.patchValue(this._content); }
  }

  coverUploaded(url: string) {
    this.editForm.patchValue({cover: url}, {emitEvent: false});
  }

  async submitForm() {

    if (this.editForm.valid) {

      try {
        await this.afs.doc(`content/${this.editForm.value.id}`).set(this.editForm.value, {merge: true});
        this.toastr.success('Contenido editado correctamente.');
        this.modal.getModal('editContentModal').close();
        this.added.next(this.editForm.value);
        this.editForm.reset();
      } catch (error) {
        console.log(error);
        this.toastr.error('Ocurrió un error al editar...');
        this.error.next(error);
      }

    } else {
      console.log(this.editForm.errors);
      this.toastr.error('La información que ingresaste no es válida.');
    }

  }

  parentSelected(parent: Content) {
    if (parent) { this.editForm.patchValue({parent_id: parent.id, parent_type: parent.type}); }
  }

  markerChanged(marker: Marker) {
    console.log(marker);
  }

  addMarker(currentMarkers: Marker[]) {
    if (!currentMarkers) { currentMarkers = []; }
    this.editForm.patchValue({
      markers: [ ...currentMarkers, {time: {hour: 0, minute: 0, second: 0}, tag: 'Nuevo Marcador'} ]
    });
  }

  addRole(currentRoles: string[]) {
    if (!currentRoles) { currentRoles = []; }
    this.editForm.patchValue({
      roles: [ ...currentRoles, 'isDebug' ]
    });
  }

}
