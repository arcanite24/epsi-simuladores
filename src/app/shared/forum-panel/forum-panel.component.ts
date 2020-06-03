import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThreadCategory, Collections } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'epsi-forum-panel',
  templateUrl: './forum-panel.component.html',
  styleUrls: ['./forum-panel.component.scss']
})
export class ForumPanelComponent implements OnInit {

  public cats$: Observable<ThreadCategory[]>

  constructor(
    private afs: AngularFirestore,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.cats$ = this.afs.collection<ThreadCategory>(Collections.THREAD_CATEGORY).valueChanges()
  }

}
