import { Component, OnInit, Input } from '@angular/core';
import { PostComment, Collections } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'epsi-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss']
})
export class PostCommentComponent implements OnInit {

  @Input() public comment: PostComment

  constructor(
    private afs: AngularFirestore,
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

  get isLiked(): boolean {
    if (!this.auth.user) return false
    if (!this.comment) return false
    if (!this.comment.likes) return false
    return this.comment.likes.indexOf(this.auth.user.uid) >= 0
  }

  toggleLike(likes: string[] = [], id: string) {
    this.isLiked ? likes.splice(likes.indexOf(id), 1) : likes.push(id)
    this.afs.doc(`${Collections.POST_COMMENT}/${this.comment.id}`).update({likes})
  }

  removeComment(id: string) {
    this.afs.doc(`${Collections.POST_COMMENT}/${id}`).delete()
  }

}
