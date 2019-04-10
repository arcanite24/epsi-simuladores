import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Content, Collections } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import {map, tap} from 'rxjs/operators';
import { sortBy } from 'lodash'

@Component({
  selector: 'epsi-programa-alt-materia-page',
  templateUrl: './programa-alt-materia-page.component.html',
  styleUrls: ['./programa-alt-materia-page.component.scss']
})
export class ProgramaAltMateriaPageComponent implements OnInit {

  public id: string = this.route.snapshot.paramMap.get('id')
  public materia$: Observable<Content>
  public bloques$: Observable<Content[]>

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    public router: Router
  ) { }

  ngOnInit() {
    this.materia$ = this.afs.collection(Collections.CONTENT).doc<Content>(this.id)
      .valueChanges()
      .pipe(tap(materia => this.bloques$ = this.afs.collection<Content>(Collections.CONTENT, ref => ref
        .where('parent_id', '==', materia.id))
        .valueChanges()
        .pipe(map(bloques => sortBy(bloques, 'sortIndex')))
      ))
  }

}
