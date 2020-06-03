import { Component, OnInit, Input } from '@angular/core';
import { Media, MediaCategory } from 'src/app/app.models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'epsi-media-edit',
  templateUrl: './media-edit.component.html',
  styleUrls: ['./media-edit.component.scss']
})
export class MediaEditComponent implements OnInit {

  private _media: Media

  @Input()
  public set media(media: Media) { this.mediaChanged(media) }
  public get media(): Media { return this._media }

  public editForm: FormGroup
  public tempCat: MediaCategory
  public cats$: Observable<MediaCategory[]> = this.afs.collection<MediaCategory>('media-cat').valueChanges()

  constructor(
    private afs: AngularFirestore,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private modal: NgxSmartModalService
  ) {
    this.editForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      desc: ['', Validators.required],
      url: [null],
      categoria: [null],
      cat_name: [null]
    })
  }

  ngOnInit() {
  }

  mediaChanged(m: Media) {
    this._media = m
    if (this.editForm && m) this.editForm.patchValue(this._media)
  }

  fileUploaded(url: string) {
    this.editForm.patchValue({url})
  }

  catSelected(cat: MediaCategory) {
    this.editForm.patchValue({
      cat_name: cat.name,
      categoria: cat
    })
  }

  async submitForm() {

    if (this.editForm.valid) {

      try {
        await this.afs.doc(`media/${this.editForm.value.id}`).set(this.editForm.value, {merge: true})
        this.toastr.success('Descargable editado correctamente.')
        this.modal.getModal('mediaEditModal').close()
        this.editForm.reset()
      } catch (error) {
        console.log(error)
        this.toastr.error('Ocurrió un error al editar...')
      }

    } else {
      this.toastr.error('La información que ingresaste no es válida.')
    }

  }

}
