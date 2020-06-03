import { Component, OnInit, Input } from '@angular/core';
import { Thread, ThreadResponse, Collections } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'epsi-thread-replies-widget',
  templateUrl: './thread-replies-widget.component.html',
  styleUrls: ['./thread-replies-widget.component.scss']
})
export class ThreadRepliesWidgetComponent implements OnInit {

  @Input() public thread: Thread;
  public replies$: Observable<ThreadResponse[]>;

  constructor(
    private afs: AngularFirestore,
    private toastr: ToastrService,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.replies$ = this.afs.collection<ThreadResponse>(Collections.THREAD_RESPONSE, ref => ref
      .where('thread.id', '==', this.thread.id)).valueChanges();
  }

  async removeReply(id: string) {
    await this.afs.doc(`${Collections.THREAD_RESPONSE}/${id}`).delete();
    this.toastr.success('Respuesta borrada correctamente.');
  }

}
