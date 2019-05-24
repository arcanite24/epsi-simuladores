import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Slide, Collections } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap } from 'rxjs/operators';
import { NgxGalleryOptions, NgxGalleryAnimation } from 'ngx-gallery';
import { sortBy } from 'lodash'

@Component({
  selector: 'epsi-slide-detail-page',
  templateUrl: './slide-detail-page.component.html',
  styleUrls: ['./slide-detail-page.component.scss']
})
export class SlideDetailPageComponent implements OnInit {

  public id: string = this.route.snapshot.paramMap.get('id')
  public slide$: Observable<Slide>

  public images: {small: string, medium: string, big: string}[] = []

  public galleryOptions: NgxGalleryOptions[] = [
    {width: '100%', thumbnailsColumns: 6, imageAnimation: NgxGalleryAnimation.Slide}
  ]

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.slide$ = this.afs.doc<Slide>(`${Collections.SLIDE}/${this.id}`)
      .valueChanges()
      .pipe(
        tap(slide => {
          /*this.images = sortBy(slide.images.map(f => ({small: f, medium: f, big: f})), 'small')*/
          this.images = slide.images.map(f => ({small: f, medium: f, big: f}));
          //this.images = slide.images.map(url => unescape(url.substring(113).split('?')[0])).sort().map(f => ({small: f, medium: f, big: f}))
          //console.log(slide.images.map(url => unescape(url.substring(113).split('?')[0])).sort())
          /* console.log(this.images.map(img => unescape(img.small.substring(113).split('?')[0]))) */
        })
      )
  }

}
