import { Collections, ContentTypesEnum, Content } from './../../app.models';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'epsi-materias-panel',
  templateUrl: './materias-panel.component.html',
  styleUrls: ['./materias-panel.component.scss']
})
export class MateriasPanelComponent implements OnInit {

  public materias$: Observable<Content[]>;

  constructor(
    private afs: AngularFirestore,
  ) { }

  ngOnInit() {
    this.loadMaterias();
  }

  loadMaterias() {
    this.materias$ = this.afs.collection<Content>(Collections.CONTENT, ref => ref
      .where('type', '==', ContentTypesEnum.Materia))
      .valueChanges();
  }

  openMateria(materia: Content) {

  }

}
