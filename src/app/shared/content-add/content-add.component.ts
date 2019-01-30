import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ContentTypes, Content } from 'src/app/app.models';
import { ToastrService } from 'ngx-toastr';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Observable } from 'rxjs';

@Component({
  selector: 'epsi-content-add',
  templateUrl: './content-add.component.html',
  styleUrls: ['./content-add.component.scss']
})
export class ContentAddComponent implements OnInit {

  @Output() added: EventEmitter<any> = new EventEmitter()
  @Output() error: EventEmitter<any> = new EventEmitter()

  public addForm: FormGroup
  public contentTypes: string[] = ContentTypes

  public tempParent: Content

  public contents$: Observable<Content[]> = this.afs.collection<Content>('content').valueChanges()

  constructor(
    private fb: FormBuilder,
    private afs: AngularFirestore,
    private toastr: ToastrService,
    private modal: NgxSmartModalService
  ) { }

  ngOnInit() {

    this.addForm = this.fb.group({
      id: [this.afs.createId(), Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      cover: null,
      parent_id: [null],
      parent_type: [null],
      totalRatings: 0,
      ratings: {},
      video: null,
      markers: [[]]
    })

  }

  coverUploaded(url: string) {
    this.addForm.patchValue({cover: url}, {emitEvent: false})
  }

  async submitForm() {

    if (this.addForm.valid) {

      try {
        await this.afs.doc(`content/${this.addForm.value.id}`).set(this.addForm.value)
        this.toastr.success('Contenido agregado correctamente.')
        this.modal.getModal('addContentModal').close()
        this.added.next(this.addForm.value)
        this.addForm.reset()
        this.addForm.patchValue({id: this.afs.createId()}, {emitEvent: false})
      } catch (error) {
        console.log(error)
        this.toastr.error('Ocurrió un error al agregar...')
        this.error.next(error)
      }

    } else {
      console.log(this.addForm.errors)
      this.toastr.error('La información que ingresaste no es válida.')
    }

  }
  
  parentSelected(parent: Content) {
    if (parent) this.addForm.patchValue({parent_id: parent.id, parent_type: parent.type})
  }

}
