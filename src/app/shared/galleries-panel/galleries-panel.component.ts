import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { GalleryCategory, Collections } from 'src/app/app.models';

@Component({
  selector: 'epsi-galleries-panel',
  templateUrl: './galleries-panel.component.html',
  styleUrls: ['./galleries-panel.component.scss']
})
export class GalleriesPanelComponent implements OnInit {

  public cats$: Observable<GalleryCategory[]>

  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.cats$ = this.afs.collection<GalleryCategory>(Collections.GALLERY_CATEGORY).valueChanges()
  }

}
