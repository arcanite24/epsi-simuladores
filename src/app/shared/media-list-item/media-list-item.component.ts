import { Component, OnInit, Input } from '@angular/core';
import { Media, Collections, MediaCategory } from 'src/app/app.models';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'epsi-media-list-item',
  templateUrl: './media-list-item.component.html',
  styleUrls: ['./media-list-item.component.scss']
})
export class MediaListItemComponent implements OnInit {

  @Input() public category: MediaCategory
  public slides$: Observable<Media[]>

  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.slides$ = this.afs.collection<Media>(Collections.MEDIA, ref => ref.where('categoria.id', '==', this.category.id)).valueChanges()
  }

}
