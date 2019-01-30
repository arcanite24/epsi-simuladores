import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Livestream, Collections } from 'src/app/app.models';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'epsi-livestream-detail-page',
  templateUrl: './livestream-detail-page.component.html',
  styleUrls: ['./livestream-detail-page.component.scss']
})
export class LivestreamDetailPageComponent implements OnInit {

  public live_id: string = this.route.snapshot.paramMap.get('id')
  public live_url: string | SafeResourceUrl
  public chat_url: string | SafeResourceUrl
  public live$: Observable<Livestream>

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.live$ = this.afs.doc<Livestream>(`${Collections.LIVESTREAM}/${this.live_id}`)
      .valueChanges()
      .pipe(
        tap(live => {
          this.live_url = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.getId(live.url)}`)
          this.chat_url = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/live_chat?v=${this.getId(live.url)}&embed_domain=${document.domain}`)
        })
      )
  }

  getId(url){
    var ID = '';
    url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if(url[2] !== undefined) {
      ID = url[2].split(/[^0-9a-z_\-]/i);
      ID = ID[0];
    }
    else {
      ID = url;
    }
      return ID;
  }

}
