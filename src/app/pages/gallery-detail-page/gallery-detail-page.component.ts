import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Gallery, Collections } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgxGalleryOptions, NgxGalleryAnimation } from 'ngx-gallery';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'epsi-gallery-detail-page',
  templateUrl: './gallery-detail-page.component.html',
  styleUrls: ['./gallery-detail-page.component.scss']
})
export class GalleryDetailPageComponent implements OnInit {

  public gallery_id: string = this.route.snapshot.paramMap.get('id')
  public gallery$: Observable<Gallery>

  public images: {small: string, medium: string, big: string}[] = []

  public galleryOptions: NgxGalleryOptions[] = [
    {width: '100%', thumbnailsColumns: 6, imageAnimation: NgxGalleryAnimation.Slide}
  ]

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.gallery$ = this.afs.doc<any>(`${Collections.GALLERY}/${this.gallery_id}`)
      .valueChanges()
      .pipe(
        tap(gallery => {
          this.images = gallery.fotos.map(f => ({small: f, medium: f, big: f}))
        })
      )
  }

}
