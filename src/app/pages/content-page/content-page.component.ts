import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { AngularFirestore } from '@angular/fire/firestore';
import { Collections } from 'src/app/app.models';

@Component({
  selector: 'epsi-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss']
})
export class ContentPageComponent implements OnInit {

  public masterContentId: string = this.route.snapshot.paramMap.get('id')
  public masterContent$: Observable<Content>

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {

    this.masterContent$ = this.afs.doc<Content>(`${Collections.CONTENT}/${this.masterContentId}`).valueChanges()

  }

}
