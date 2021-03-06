import { Component, OnInit, Input } from '@angular/core';
import { Post, Collections } from 'src/app/app.models';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'epsi-feed-post-item',
  templateUrl: './feed-post-item.component.html',
  styleUrls: ['./feed-post-item.component.scss']
})
export class FeedPostItemComponent implements OnInit {

  @Input('post') public post: Post

  public commentCount: number = 0

  constructor(
    public auth: AuthService,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
  }

  get isLiked(): boolean {
    if (!this.auth.user) return false
    if (!this.post) return false
    if (!this.post.likes) return false
    return this.post.likes.indexOf(this.auth.user.uid) >= 0
  }

  toggleLike(id: string, likes: string[] = []) {
    this.isLiked ? likes.splice(likes.indexOf(this.auth.user.uid), 1) : likes.push(this.auth.user.uid)
    this.afs.doc(`${Collections.POST}/${id}`).update({likes})
  }

}
