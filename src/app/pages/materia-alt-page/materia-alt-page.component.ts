import { AngularFirestore } from '@angular/fire/firestore';
import { Content, Collections } from 'src/app/app.models';
import { DataService } from './../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'epsi-materia-alt-page',
  templateUrl: './materia-alt-page.component.html',
  styleUrls: ['./materia-alt-page.component.scss']
})
export class MateriaAltPageComponent implements OnInit {

  public id: string = this.route.snapshot.paramMap.get('materia');
  public materia$: Observable<Content>;

  constructor(
    public router: Router,
    public auth: AuthService,
    private route: ActivatedRoute,
    private afs: AngularFirestore,
  ) { }

  ngOnInit() {
    this.loadMateria(this.id);
  }

  loadMateria(id: string) {
    this.materia$ = this.afs.collection(Collections.CONTENT).doc<Content>(id).valueChanges();
  }

}
