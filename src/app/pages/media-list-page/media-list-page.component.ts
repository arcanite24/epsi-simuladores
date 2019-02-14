import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Collections, MediaCategory } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'epsi-media-list-page',
  templateUrl: './media-list-page.component.html',
  styleUrls: ['./media-list-page.component.scss']
})
export class MediaListPageComponent implements OnInit {

  public slides$: Observable<MediaCategory[]>

  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.slides$ = this.afs.collection<MediaCategory>(Collections.MEDIA_CATEGORY)
      .valueChanges()
      .pipe(
        map(slides => slides.map(s => ({ ...s, show: false })))
      )
  }

}
