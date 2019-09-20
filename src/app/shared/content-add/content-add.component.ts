import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ContentTypes, Content } from 'src/app/app.models';
import { ToastrService } from 'ngx-toastr';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Observable } from 'rxjs';
import { ConvertService } from 'src/app/convert.service';

@Component({
  selector: 'epsi-content-add',
  templateUrl: './content-add.component.html',
  styleUrls: ['./content-add.component.scss']
})
export class ContentAddComponent implements OnInit {

  @Input() public extraPayload: any;
  @Input() public isPdf = false;

  @Output() added: EventEmitter<any> = new EventEmitter();
  @Output() error: EventEmitter<any> = new EventEmitter();

  public addForm: FormGroup;
  public contentTypes: string[] = ContentTypes;
  public loading = false;

  public tempParent: Content;

  public contents$: Observable<Content[]>;

  constructor(
    private fb: FormBuilder,
    private afs: AngularFirestore,
    private toastr: ToastrService,
    private modal: NgxSmartModalService,
    private convert: ConvertService,
  ) { }

  ngOnInit() {

    this.addForm = this.fb.group({
      id: [this.afs.createId(), Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      type: [''],
      cover: null,
      parent_id: [null],
      parent_type: [null],
      totalRatings: 0,
      ratings: {},
      video: null,
      markers: [[]],
      sortIndex: 0,
      isPdf: [false],
      pdf: [null],
    });

    this.loadContent();

  }

  coverUploaded(url: string) {
    this.addForm.patchValue({cover: url}, {emitEvent: false});
  }

  loadContent() {
    if (this.isPdf) {
      this.contents$ = this.afs.collection<Content>('content', ref => ref.where('isPdf', '==', true)).valueChanges();
    } else {
      this.contents$ = this.afs.collection<Content>('content').valueChanges();
    }
  }

  async convertPDF(list: FileList) {
    try {
      this.loading = true;
      const urls = await this.convert.convertPDF(list);
      this.addForm.patchValue({ pdf: urls });
      this.toastr.success('PDF subido correctamente');
      this.loading = false;
    } catch (error) {
      console.log(error);
      this.toastr.error('Ocurrió un error al subir el pdf');
    }
  }

  async submitForm() {

    if (this.addForm.valid) {

      if (this.extraPayload) { this.addForm.patchValue(this.extraPayload); }

      if (this.isPdf) {
        this.addForm.patchValue({
          type: 'pdf'
        });
      }

      try {
        await this.afs.doc(`content/${this.addForm.value.id}`).set(this.addForm.value);
        this.toastr.success('Contenido agregado correctamente.');
        this.modal.getModal('addContentModal').close();
        this.added.next(this.addForm.value);
        this.addForm.reset();
        this.addForm.patchValue({id: this.afs.createId()}, {emitEvent: false});
      } catch (error) {
        console.log(error);
        this.toastr.error('Ocurrió un error al agregar...');
        this.error.next(error);
      }

    } else {
      console.log(this.addForm.errors);
      this.toastr.error('La información que ingresaste no es válida.');
    }

  }

  parentSelected(parent: Content) {
    if (parent) { this.addForm.patchValue({parent_id: parent.id, parent_type: parent.type}) }
  }

}
