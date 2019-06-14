import { Component, OnInit, Input } from '@angular/core';
import { ThreadCategory, Collections } from 'src/app/app.models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { NgxSmartModalService } from 'ngx-smart-modal';
import {DataService} from '../../services/data.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'epsi-thread-add',
  templateUrl: './thread-add.component.html',
  styleUrls: ['./thread-add.component.scss']
})
export class ThreadAddComponent implements OnInit {

  private _cat: ThreadCategory;

  @Input()
  public set category(cat: ThreadCategory) { this.catChanged(cat); }
  public get category(): ThreadCategory { return this._cat; }

  public addForm: FormGroup = this.fb.group({
    id: [this.afs.createId(), Validators.required],
    title: ['', Validators.required],
    text: ['', Validators.required],
    date: [new Date().toISOString(), Validators.required],
    cat_id: null,
    cat_name: null,
    user: null,
  });

  constructor(
    private fb: FormBuilder,
    private afs: AngularFirestore,
    private toastr: ToastrService,
    private modal: NgxSmartModalService,
    private data: DataService,
    private auth: AuthService,
  ) { }

  ngOnInit() {
  }

  catChanged(cat: ThreadCategory) {
    this._cat = cat;
    if (cat && this.addForm) {
      this.addForm.patchValue({
        cat_id: cat.id,
        cat_name: cat.name
      });
    }
  }

  async submitForm() {

    this.addForm.patchValue({date: new Date().toISOString(), user: this.auth.user.uid});

    if (this.addForm.valid) {

      try {

        const thread_id = this.addForm.value.id;
        const thread_name = this.addForm.value.title;

        await this.afs.doc(`${Collections.THREAD}/${this.addForm.value.id}`).set(this.addForm.value);
        this.toastr.success('Hilo agregado correctamente.');
        this.modal.getModal('threadAddModal').close();
        this.addForm.reset({ ...this.addForm.value, id: this.afs.createId(), title: '', text: '' });

        // Send noti for all admins
        const admins = await this.data.getAllAdmins();

        for (const admin of admins) {

          const id = this.afs.createId();

          await this.afs.collection(Collections.NOTIFICATION).doc(id).set({
            id,
            title: `Nueva pregunta en: ${this.category.name}`,
            text: 'Agregaron una nueva pregunta en: ' + this.category.name,
            date: new Date().toISOString(),
            isGlobal: false,
            user: admin,
            link_name: 'Pregunta: ' + thread_name,
            link_href: `/thread/${thread_id}`
          });

        }

      } catch (error) {
        console.log(error);
        this.toastr.error('Ocurrió un error al crear el hilo...');
      }

    } else {
      console.log(this.addForm.errors);
      this.toastr.error('La información que ingresaste no es válida.');
    }

  }

}
