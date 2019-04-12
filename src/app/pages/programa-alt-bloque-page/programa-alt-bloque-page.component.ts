import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Content, Collections, Event, User } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import {map, tap} from 'rxjs/operators';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { environment } from 'src/environments/environment';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from 'src/app/services/auth.service';
import { sortBy } from 'lodash';

@Component({
  selector: 'epsi-programa-alt-bloque-page',
  templateUrl: './programa-alt-bloque-page.component.html',
  styleUrls: ['./programa-alt-bloque-page.component.scss']
})
export class ProgramaAltBloquePageComponent implements OnInit {

  public bloque_id: string = this.route.snapshot.paramMap.get('id')
  
  public bloque$: Observable<Content>
  public materia$: Observable<Content>
  public temas$: Observable<Content[]>

  public total_temas: number = 0

  public tempEvent: Event
  public completed: string[] = []
  public contentIds: string[] = []

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private modal: NgxSmartModalService,
    private data: DataService,
    private auth: AuthService,
  ) { }

  get completedContent(): number {
    if (!this.completed) return 0
    if (!this.contentIds) return 0
    let counter = 0
    for (const content of this.contentIds) {
      if (this.completed.includes(content)) counter++
    }
    return counter
  }

  ngOnInit() {

    this.bloque$ = this.afs.collection(Collections.CONTENT).doc<Content>(this.bloque_id)
      .valueChanges()
      .pipe(
        tap(bloque => {
          if (bloque.parent_id) this.materia$ = this.afs.collection(Collections.CONTENT).doc<Content>(bloque.parent_id).valueChanges()
          this.temas$ = this.afs.collection<Content>(Collections.CONTENT, ref => ref.where('parent_id', '==', bloque.id))
            .valueChanges()
            .pipe(tap(temas => {
              this.total_temas = temas.length
              this.contentIds = sortBy(temas, 'sortIndex').map(t => t.event || 'NULL')
            }), map(temas => sortBy(temas, 'sortIndex').filter(t => !t.ignoreOnSmartCalendar)))
        })
      )

    this.loadCompleted()

  }

  loadCompleted() {
    this.auth.user$.subscribe(user => {
      if (user) {
        this.afs.collection(Collections.USER).doc<User>(user.uid).valueChanges().subscribe(_user => this.completed = _user.completedTasks)
      }
    })
  }

  async openContent(c: Content) {
    
    if (c.event) {
      this.tempEvent = await this.data.getDoc<Event>(Collections.EVENT, c.event)
    } else if (!environment.production) {
      this.tempEvent = await this.data.getDoc<Event>(Collections.EVENT, 'ABMVSHn8d6OOmmqSfV9Y')
    }

    this.modal.getModal('eventModal').open()

  }

  isCompleted(completed: string[] = [], id: string = 'NULL'): boolean {
    return completed.includes(id)
  }

  updateContent(payload: Partial<Content>) {
    this.afs.collection(Collections.CONTENT).doc(payload.id).update(payload)
  }

}
