import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {Content, Collections, User} from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import {map, tap} from 'rxjs/operators';
import { sortBy } from 'lodash';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'epsi-programa-alt-materia-page',
  templateUrl: './programa-alt-materia-page.component.html',
  styleUrls: ['./programa-alt-materia-page.component.scss']
})
export class ProgramaAltMateriaPageComponent implements OnInit, OnDestroy {

  public id: string = this.route.snapshot.paramMap.get('id');
  public materia$: Observable<Content>;
  public bloques$: Observable<Content[]>;

  private userSub: Subscription;
  public completedTasks: string[];

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    public router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {

    this.auth.user$.subscribe(user => {
      if (user && !this.userSub) {
        this.userSub = this.afs.collection(Collections.USER).doc<User>(user.uid).valueChanges().subscribe(_user => {
        this.completedTasks = _user.completedTasks;
      });
      }
    });

    this.materia$ = this.afs.collection(Collections.CONTENT).doc<Content>(this.id)
      .valueChanges()
      .pipe(tap(materia => this.bloques$ = this.afs.collection<Content>(Collections.CONTENT, ref => ref
        .where('parent_id', '==', materia.id))
        .valueChanges()
        .pipe(map(bloques => sortBy(bloques, 'sortIndex')
          .map(b => ({
            ...b, temas$: this.afs.collection(Collections.CONTENT, ref => ref.where('parent_id', '==', b.id)).valueChanges()
          } as Content))
          .filter(b => !b.ignoreOnSmartCalendar)
          .filter(b => {
            if (this.auth.isPresencial) { return false; }
            if (this.auth.isPremium2019) { return true; }
            return b.liberadoInPrograma;
          })
        ))
      ));

  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  getCompletedTemas(temas: Content[] = [], completed: string[] = []): number {

    let counter = 0;
    const ids = temas.map(t => t.id);

    for (const id of ids) {
      if (completed.includes(id)) { counter++; }
    }

    return counter;

  }

  updateContent(payload: Partial<Content>) {
    this.afs.collection(Collections.CONTENT).doc(payload.id).update(payload);
  }

  isLiberado(content: Content) {
    if (!this.auth.user) { return false; }
    if (this.auth.user.isAdmin) { return true; }
    if (this.auth.user.isPremium2019) { return true; }
    return content.liberadoInPrograma;
  }

}
