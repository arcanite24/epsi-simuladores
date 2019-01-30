import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post, PostComment, Collections } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'epsi-feed-post-comments',
  templateUrl: './feed-post-comments.component.html',
  styleUrls: ['./feed-post-comments.component.scss']
})
export class FeedPostCommentsComponent implements OnInit {

  @Input() public post: Post
  @Output() public loaded: EventEmitter<number> = new EventEmitter()

  public comments$: Observable<PostComment[]>
  public addForm: FormGroup

  constructor(
    private afs: AngularFirestore,
    public auth: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.comments$ = this.afs.collection<PostComment>(Collections.POST_COMMENT, ref => ref.where('post', '==', this.post.id))
      .valueChanges()
      .pipe(
        tap(comments => this.loaded.next(comments.length))
      )

      this.addForm = this.fb.group({
        id: this.afs.createId(),
        text: ['', Validators.required],
        post: this.post.id,
        date: new Date().toISOString(),
        user: null,
        likes: [[]]
      })

  }

  async submitForm(comment: PostComment) {

    this.addForm.patchValue({date: new Date().toISOString(), user: this.auth.user})

    if (this.addForm.valid) {
      await this.afs.doc(`${Collections.POST_COMMENT}/${comment.id}`).set({...comment})
      this.addForm.reset({...comment, text: '', id: this.afs.createId()})
    }

  }

}
