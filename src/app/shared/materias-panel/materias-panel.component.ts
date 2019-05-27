import { AuthService } from './../../services/auth.service';
import { Collections, ContentTypesEnum, Content } from './../../app.models';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { sortBy } from 'lodash';

@Component({
  selector: 'epsi-materias-panel',
  templateUrl: './materias-panel.component.html',
  styleUrls: ['./materias-panel.component.scss']
})
export class MateriasPanelComponent implements OnInit {

  public materias$: Observable<Content[]>;

  constructor(
    public auth: AuthService,
    private afs: AngularFirestore,
  ) { }

  ngOnInit() {
    this.loadMaterias();
  }

  loadMaterias() {
    this.materias$ = this.afs.collection<Content>(Collections.CONTENT, ref => ref
      .where('type', '==', ContentTypesEnum.Materia))
      .valueChanges()
      .pipe(map(materias => sortBy(materias, 'sortIndex')));
  }

}
