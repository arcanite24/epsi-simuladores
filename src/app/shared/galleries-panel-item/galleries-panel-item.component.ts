import { Component, OnInit, Input } from '@angular/core';
import { GalleryCategory, Gallery, Collections } from 'src/app/app.models';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'epsi-galleries-panel-item',
  templateUrl: './galleries-panel-item.component.html',
  styleUrls: ['./galleries-panel-item.component.scss']
})
export class GalleriesPanelItemComponent implements OnInit {

  @Input() public category: GalleryCategory
  public galleries$: Observable<Gallery[]>

  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit() {

    this.galleries$ = this.afs.collection<Gallery>(Collections.GALLERY, ref => ref.where('cat_id', '==', this.category.id)).valueChanges()

  }

}
