import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Collections, Note } from 'src/app/app.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'epsi-content-notes-panel',
  templateUrl: './content-notes-panel.component.html',
  styleUrls: ['./content-notes-panel.component.scss']
})
export class ContentNotesPanelComponent implements OnInit {

  @Input() public parent_type: string;
  @Input() public parent_id: string;
  @Input() public content_type: string;
  @Input() public extra_paylod: any;
  @Input() public title = 'Mis Notas';

  public noteForm: FormGroup;
  public notes$: Observable<Note[]>;

  constructor(
    private afs: AngularFirestore,
    private fb: FormBuilder,
    private auth: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {

    this.auth.user$.subscribe(user => {

      if (!user) { return; }

      this.noteForm = this.fb.group({
        id: [this.afs.createId(), Validators.required],
        title: ['', Validators.required],
        text: ['', Validators.required],
        user: [user.uid, Validators.required],
        parent_type: this.parent_type,
        parent_id: this.parent_id,
        content_type: this.content_type,
      });

      this.notes$ = this.afs.collection<Note>(Collections.NOTE, ref => ref
        .where('user', '==', user.uid)
        .where('parent_id', '==', this.parent_id)).valueChanges();

    });

  }

  async addNote() {

    if (this.noteForm.valid) {

      await this.afs.doc(`${Collections.NOTE}/${this.noteForm.value.id}`).set(this.noteForm.value);
      this.toastr.success('Nota agregada correctamente.');

      this.noteForm.reset({
        id: this.afs.createId(),
        title: '',
        text: '',
        user: this.noteForm.value.user,
        parent_type: this.parent_type,
        parent_id: this.parent_id,
        content_type: this.content_type,
        ...(this.extra_paylod ? this.extra_paylod : {})
      });

    } else {
      this.toastr.error('Por favor ingresa datos válidos para crear una nota...');
    }

  }

}
