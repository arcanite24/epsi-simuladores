import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Collections, SlideCategory } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'epsi-slides-list-page',
  templateUrl: './slides-list-page.component.html',
  styleUrls: ['./slides-list-page.component.scss']
})
export class SlidesListPageComponent implements OnInit {

  public slides$: Observable<SlideCategory[]>

  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.slides$ = this.afs.collection<SlideCategory>(Collections.SLIDE_CATEGORY)
      .valueChanges()
      .pipe(
        map(slides => slides.map(s => ({ ...s, show: false })))
      )
  }

}
