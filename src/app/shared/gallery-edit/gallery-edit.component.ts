import { Component, OnInit, Input } from '@angular/core';
import { Gallery, GalleryCategory, Collections } from 'src/app/app.models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'epsi-gallery-edit',
  templateUrl: './gallery-edit.component.html',
  styleUrls: ['./gallery-edit.component.scss']
})
export class GalleryEditComponent implements OnInit {

  private _gallery: Gallery

  @Input()
  set gallery(g: Gallery) { this.galleryChanged(g) }
  get gallery(): Gallery { return this._gallery }

  public editForm: FormGroup
  public tempCat: GalleryCategory
  public cats$: Observable<GalleryCategory[]> = this.afs.collection<GalleryCategory>(Collections.GALLERY_CATEGORY).valueChanges()

  constructor(
    private fb: FormBuilder,
    private modal: NgxSmartModalService,
    private toastr: ToastrService,
    private afs: AngularFirestore
  ) {
    this.editForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      desc: ['', Validators.required],
      fotos: [[]],
      categoria: [null],
      cat_name: [null],
      cat_id: null
    })
  }

  ngOnInit() {
  }

  galleryChanged(g: Gallery) {
    this._gallery = g
    if (this.editForm && g) this.editForm.patchValue(this._gallery)
  }

  fotoUploaded(url: string) {
    this.editForm.patchValue({fotos: [...this.editForm.value.fotos, url]})
  }

  catSelected(cat: GalleryCategory) {
    this.editForm.patchValue({
      cat_name: cat.name,
      categoria: cat,
      cat_id: cat.id
    })
  }
  
  async submitForm() {

    if (this.editForm.valid) {

      try {
        await this.afs.doc(`${Collections.GALLERY}/${this.editForm.value.id}`).set(this.editForm.value, {merge: true})
        this.toastr.success('Galería editada correctamente.')
        this.modal.getModal('galleryEditModal').close()
        this.editForm.reset()
      } catch (error) {
        console.log(error)
        this.toastr.error('Ocurrió un error al editar...')
      }

    } else {
      this.toastr.error('La información que ingresaste no es válida.')
    }

  }

  async removeFoto(foto: string, i: number) {
    const fotos = [...this.editForm.value.fotos]
    fotos.splice(i, 1)
    this.editForm.patchValue({fotos})
    await this.afs.doc(`${Collections.GALLERY}/${this.editForm.value.id}`).set(this.editForm.value, {merge: true})
    this.toastr.success('Foto removida correctamente.')
    // TODO: Add error handler for removing a picture from gallery
  }  

}
