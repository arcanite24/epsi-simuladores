import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Collections, Content } from 'src/app/app.models';

@Component({
  selector: 'epsi-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss']
})
export class ContentPageComponent implements OnInit {

  public masterContentId: string = this.route.snapshot.paramMap.get('id')
  public masterContent$: Observable<Content>
  public children$: Observable<Content[]>

  public master: Content

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {

    this.masterContent$ = this.afs.doc<Content>(`${Collections.CONTENT}/${this.masterContentId}`).valueChanges()
    this.children$ = this.afs.collection<Content>(Collections.CONTENT, ref => ref.where('parent_id', '==', this.masterContentId)).valueChanges()

    this.masterContent$.subscribe(m => this.master = m)

  }

}
