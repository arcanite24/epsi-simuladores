import { Component, OnInit, Input } from '@angular/core';
import { Slide, SlideCategory, Collections } from 'src/app/app.models';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { sortBy } from 'lodash';

@Component({
  selector: 'epsi-slide-edit',
  templateUrl: './slide-edit.component.html',
  styleUrls: ['./slide-edit.component.scss']
})
export class SlideEditComponent implements OnInit {

  private SLIDE_API = 'https://v2.convertapi.com/pptx/to/jpg?Secret=JIfvyn5wHSAACbC8';

  private _slide: Slide;

  @Input()
  public set slide(s: Slide) { this.slideChanged(s); }
  public get slide() { return this._slide; }

  public editForm: FormGroup;
  public tempCat: SlideCategory;
  public cats$: Observable<SlideCategory[]> = this.afs.collection<SlideCategory>(Collections.SLIDE_CATEGORY).valueChanges();
  public l = false;

  public lastIndex = -1;

  constructor(
    private afs: AngularFirestore,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private modal: NgxSmartModalService,
    private http: HttpClient,
    private storage: AngularFireStorage
  ) { }

  ngOnInit() {

    this.editForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      desc: ['', Validators.required],
      cat_id: [null],
      cat_name: [null],
      images: [[]],
      images_order: [[]],
    });

  }

  slideChanged(s: Slide) {
    this._slide = s;
    if (this.editForm) { this.editForm.patchValue(s) }
  }

  fileUploaded(url: string, images: string[] = []) {
    this.editForm.patchValue({
      images: [...images, url],
    });
  }

  removeImage(i: number, images: string[] = []) {
    images.splice(i, 1);
    this.editForm.patchValue({
      images
    });
  }

  async saveSlide() {
    await this.afs.doc(`${Collections.SLIDE}/${this.editForm.value.id}`).set(this.editForm.value, {merge: true});
  }

  catSelected(cat: SlideCategory) {
    this.editForm.patchValue({
      cat_name: cat.name,
      cat_id: cat.id
    });
  }

  async submitForm() {

    if (this.editForm.valid) {

      try {
        await this.afs.doc(`${Collections.SLIDE}/${this.editForm.value.id}`).set(this.editForm.value, {merge: true});
        this.toastr.success('Presentación editado correctamente.');
        this.modal.getModal('slideEditModal').close();
        this.editForm.reset();
      } catch (error) {
        console.log(error);
        this.toastr.error('Ocurrió un error al editar...');
      }

    } else {
      this.toastr.error('La información que ingresaste no es válida.');
    }

  }

  async pptxSelected(files: FileList) {

    if (!files) { return }
    if (files.length <= 0) { return }

    const file = files.item(0);
    if (!file.name.includes('.pptx')) { return this.toastr.error('El archivo debe ser de tipo .pptx') }
    this.l = true;

    console.log(files);

    try {

      const result = await this.convertSlide(file);
      const urls = await this.uploadSlides(result.Files);
      this.editForm.patchValue({images: [...this.editForm.value.images, ...urls]});
      this.l = false;

    } catch (error) {
      this.toastr.error('Ocurrió un error al convertir la presentación');
      console.log(error);
      this.l = false;
    }

  }

  convertSlide(file: File) {
    const data = new FormData();
    data.append('File', file);
    return this.http.post<any>(this.SLIDE_API, data).toPromise();
  }

  async uploadSlides(slides: {FileData: string, FileName: string, FileSize: number}[]) {
    const queue = slides.map(slide => this.uploadFile(slide.FileName, slide.FileData));
    return Promise.all(queue);
  }

  uploadFile(filename: string, data: string): Promise<string | null> {
    return new Promise((resolve, _) => {
      const ref = this.storage.ref(`slides/${filename}`);
      const task = ref.putString(data, 'base64');
      task.snapshotChanges().pipe(
        finalize(() => {
          ref.getDownloadURL().subscribe(url => resolve(url));
        })
      ).subscribe();
    });
  }

  array_move(arr: any[], old_index: number, new_index: number) {
    if (new_index >= arr.length) {
      let k = new_index - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
  }

  movePicture(images: string[], old_index: number, new_index: number) {
    this.editForm.patchValue({
      images: this.array_move(images, old_index, new_index)
    });
  }

  orderImages(images: string[] = []) {
    this.editForm.patchValue({
      images: sortBy(images.map(f => ({small: f, medium: f, big: f})), 'small')
    });
  }

}
