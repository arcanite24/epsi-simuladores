import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { Collections } from 'src/app/app.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'epsi-content-comments-panel',
  templateUrl: './content-comments-panel.component.html',
  styleUrls: ['./content-comments-panel.component.scss']
})
export class ContentCommentsPanelComponent implements OnInit {

  private _parent_type: string
  private _parent_id: string
  private _content_type: string

  @Input()
  public set parent_type(p: string) {
    this._parent_type = p
    if (this.commentForm) this.commentForm.patchValue({parent_type: p})
  }

  public get parent_type(): string { return this._parent_type }

  @Input()
  public set parent_id(p: string) {
    this._parent_id = p
    if (this.commentForm) this.commentForm.patchValue({parent_id: p})
  }

  public get parent_id(): string { return this._parent_id }

  @Input()
  public set content_type(p: string) {
    this._content_type = p
    if (this.commentForm) this.commentForm.patchValue({content_type: p})
  }

  public get content_type(): string { return this._content_type }
  
  public commentForm: FormGroup = this.fb.group({
    id: [this.afs.createId(), Validators.required],
    text: ['', Validators.required],
    user: [null, Validators.required],
    user_name: [null, Validators.required],
    user_photo: [null, Validators.required],
    parent_type: this.parent_type,
    parent_id: this.parent_id,
    content_type: this.content_type,
    date: new Date().toISOString()
  })
  public comments$: Observable<Comment[]>
  
  constructor(
    private afs: AngularFirestore,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private auth: AuthService
  ) { }

  ngOnInit() {

    this.auth.user$.subscribe(user => {

      if (!user) return

      this.commentForm.patchValue({
        user: user.uid,
        user_name: user.displayName,
        user_photo: user.photoURL,
      })

      this.comments$ = this.afs.collection<Comment>(Collections.COMMENT, ref => ref
        //.where('user', '==', user.uid)
        .where('parent_id', '==', this.parent_id)).valueChanges()

    })

  }

  async addComment() {

    this.commentForm.patchValue({date: new Date().toISOString()})
    
    if (this.commentForm.valid) {
      await this.afs.doc(`${Collections.COMMENT}/${this.commentForm.value.id}`).set(this.commentForm.value)
      this.toastr.success('Comentario agregado correctamente.')
      this.commentForm.reset({...this.commentForm.value, text: ''})
    } else {
      this.toastr.error('Por favor ingresa datos válidos para agregar un comentario...')
    }

  }

}
