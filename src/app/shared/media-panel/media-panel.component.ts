import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Media, Collections } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'epsi-media-panel',
  templateUrl: './media-panel.component.html',
  styleUrls: ['./media-panel.component.scss']
})
export class MediaPanelComponent implements OnInit {

  public medias$: Observable<Media[]>

  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.medias$ = this.afs.collection<Media>(Collections.MEDIA, ref => ref.limit(5)).valueChanges()
  }

}
