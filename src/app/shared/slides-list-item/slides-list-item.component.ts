import { Component, OnInit, Input } from '@angular/core';
import { SlideCategory, Slide, Collections } from 'src/app/app.models';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'epsi-slides-list-item',
  templateUrl: './slides-list-item.component.html',
  styleUrls: ['./slides-list-item.component.scss']
})
export class SlidesListItemComponent implements OnInit {

  @Input() public category: SlideCategory
  public slides$: Observable<Slide[]>

  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.slides$ = this.afs.collection<Slide>(Collections.SLIDE, ref => ref.where('cat_id', '==', this.category.id)).valueChanges()
  }

}
