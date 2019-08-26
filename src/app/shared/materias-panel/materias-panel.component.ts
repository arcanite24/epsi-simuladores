import { AuthService } from './../../services/auth.service';
import { Collections, ContentTypesEnum, Content } from './../../app.models';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { sortBy } from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'epsi-materias-panel',
  templateUrl: './materias-panel.component.html',
  styleUrls: ['./materias-panel.component.scss']
})
export class MateriasPanelComponent implements OnInit {

  @Input() public type: string;
  @Input() public title = 'Materias';

  @Input() public adSlug: string;
  @Input() public adButtonText: string;

  public materias$: Observable<Content[]>;

  constructor(
    public auth: AuthService,
    public router: Router,
    private afs: AngularFirestore,
  ) { }

  ngOnInit() {
    this.loadMaterias();
  }

  loadMaterias() {
    this.materias$ = this.afs.collection<Content>(Collections.CONTENT, ref => ref
      .where('type', '==', ContentTypesEnum.Materia))
      .valueChanges()
      .pipe(map(materias => sortBy(materias, 'sortIndex').filter(item => item.type === this.type)));
  }

}
