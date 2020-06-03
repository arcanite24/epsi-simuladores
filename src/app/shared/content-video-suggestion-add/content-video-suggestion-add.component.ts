import { Component, OnInit, Input } from '@angular/core';
import { Content, Collections } from 'src/app/app.models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'epsi-content-video-suggestion-add',
  templateUrl: './content-video-suggestion-add.component.html',
  styleUrls: ['./content-video-suggestion-add.component.scss']
})
export class ContentVideoSuggestionAddComponent implements OnInit {

  @Input() public content: Content

  public addForm: FormGroup

  constructor(
    private afs: AngularFirestore,
    private toastr: ToastrService,
    private auth: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.auth.user$.subscribe(user => {

      if (!user) return

      this.addForm = this.fb.group({
        id: [this.afs.createId(), Validators.required],
        text: ['', Validators.required],
        user: [user.uid, Validators.required],
        user_name: [user.displayName, Validators.required],
        user_photo: [user.photoURL, Validators.required],
        parent_type: 'content',
        parent_id: this.content.id,
        content_type: this.content.type,
        content_name: this.content.name,
        date: new Date().toISOString()
      })

    })

  }

  async addSuggestion() {

    this.addForm.patchValue({date: new Date().toISOString()})

    if (this.addForm.valid) {
      await this.afs.doc(`${Collections.SUGGESTION}/${this.addForm.value.id}`).set(this.addForm.value)
      this.toastr.success('Gracias por tu sugerencia.')
      this.addForm.reset({
        ...this.addForm.value,
        id: this.afs.createId(),
        text: ''
      })
    } else {
      this.toastr.error('Ingresa una sugerencia válida...')
    }

  }

}
