import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Media, Collections } from 'src/app/app.models';

@Component({
  selector: 'epsi-media-detail-page',
  templateUrl: './media-detail-page.component.html',
  styleUrls: ['./media-detail-page.component.scss']
})
export class MediaDetailPageComponent implements OnInit {

  public id: string = this.route.snapshot.paramMap.get('id')
  public media$: Observable<Media>

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.media$ = this.afs.doc<Media>(`${Collections.MEDIA}/${this.id}`).valueChanges()
  }

}
