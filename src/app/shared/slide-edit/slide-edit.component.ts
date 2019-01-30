import { Component, OnInit, Input } from '@angular/core';
import { Slide, SlideCategory, Collections } from 'src/app/app.models';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'epsi-slide-edit',
  templateUrl: './slide-edit.component.html',
  styleUrls: ['./slide-edit.component.scss']
})
export class SlideEditComponent implements OnInit {

  private _slide: Slide

  @Input()
  public set slide(s: Slide) { this.slideChanged(s) }
  public get slide() { return this._slide }

  public editForm: FormGroup
  public tempCat: SlideCategory
  public cats$: Observable<SlideCategory[]> = this.afs.collection<SlideCategory>(Collections.SLIDE_CATEGORY).valueChanges()

  constructor(
    private afs: AngularFirestore,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private modal: NgxSmartModalService
  ) { }

  ngOnInit() {

    this.editForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      desc: ['', Validators.required],
      cat_id: [null],
      cat_name: [null],
      images: []
    })

  }

  slideChanged(s: Slide) {
    this._slide = s
    if (this.editForm) this.editForm.patchValue(s)
  }

  fileUploaded(url: string, images: string[] = []) {
    this.editForm.patchValue({
      images: [...images, url]
    })
  }

  removeImage(i: number, images: string[] = []) {
    images.splice(i, 1)
    this.editForm.patchValue({
      images
    })
  } 

  async saveSlide() {
    await this.afs.doc(`${Collections.SLIDE}/${this.editForm.value.id}`).set(this.editForm.value, {merge: true})
  }

  catSelected(cat: SlideCategory) {
    this.editForm.patchValue({
      cat_name: cat.name,
      cat_id: cat.id
    })
  }

  async submitForm() {

    if (this.editForm.valid) {

      try {
        await this.afs.doc(`${Collections.SLIDE}/${this.editForm.value.id}`).set(this.editForm.value, {merge: true})
        this.toastr.success('Presentación editado correctamente.')
        this.modal.getModal('slideEditModal').close()
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
