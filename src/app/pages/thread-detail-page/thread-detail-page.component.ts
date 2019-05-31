import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Thread, Collections } from 'src/app/app.models';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'epsi-thread-detail-page',
  templateUrl: './thread-detail-page.component.html',
  styleUrls: ['./thread-detail-page.component.scss']
})
export class ThreadDetailPageComponent implements OnInit {

  private id: string = this.route.snapshot.paramMap.get('id')
  public tempReply: string
  
  public thread$: Observable<Thread>

  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private auth: AuthService
  ) { }

  ngOnInit() {

    this.thread$ = this.afs.doc<Thread>(`${Collections.THREAD}/${this.id}`).valueChanges()

  }

  async postReply(text: string, thread: Thread) {

    if (!text || text.length < 0) return
    const id = this.afs.createId()

    await this.afs.doc(`${Collections.THREAD_RESPONSE}/${id}`).set({
      id,
      text,
      thread,
      date: new Date().toISOString(),
      user: this.auth.user,
      user_id: this.auth.user.uid,
    })

    this.toastr.success('Respuesta enviada correctamente.')
    this.tempReply = ''

    // Send noti to owner
    if (!thread.user) return;

    const noti_id = this.afs.createId();
    await  this.afs.collection(Collections.NOTIFICATION).doc(noti_id).set({
      noti_id,
      title: 'Nueva respuesta a tu pregunta',
      text: `Alguien respondió a tu pregunta: ${thread.title}`,
      date: new Date().toISOString(),
      user: thread.user,
      link_name: 'Pregunta: ' + thread.title,
      link_href: '/thread/' + thread.id,
    })

  }

}
