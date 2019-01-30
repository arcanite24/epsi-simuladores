import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ThreadCategory, Collections, Thread } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'epsi-thread-category-detail-page',
  templateUrl: './thread-category-detail-page.component.html',
  styleUrls: ['./thread-category-detail-page.component.scss']
})
export class ThreadCategoryDetailPageComponent implements OnInit {

  private cat_id: string = this.route.snapshot.paramMap.get('id')
  public cat$: Observable<ThreadCategory>
  public threads$: Observable<Thread[]>

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    public auth: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.cat$ = this.afs.doc<ThreadCategory>(`${Collections.THREAD_CATEGORY}/${this.cat_id}`).valueChanges()
    this.threads$ = this.afs.collection<Thread>(Collections.THREAD, ref => ref.where('cat_id', '==', this.cat_id)).valueChanges()
  }

  async removeThread(id: string) {
    await this.afs.doc(`${Collections.THREAD}/${id}`).delete()
    this.toastr.success('Hilo eliminado correctamente.')
  }

}
