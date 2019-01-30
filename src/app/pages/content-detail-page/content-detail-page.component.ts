import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Content, Collections } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'epsi-content-detail-page',
  templateUrl: './content-detail-page.component.html',
  styleUrls: ['./content-detail-page.component.scss']
})
export class ContentDetailPageComponent implements OnInit {

  public content$: Observable<Content>

  public content_type: string = this.route.snapshot.paramMap.get('type')
  public parent_id: string = this.route.snapshot.paramMap.get('id')

  public seekTime: number

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {

    this.content$ = this.afs.doc<Content>(`${Collections.CONTENT}/${this.parent_id}`).valueChanges()

  }

}
