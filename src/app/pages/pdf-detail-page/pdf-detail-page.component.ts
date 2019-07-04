import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Content, Collections } from 'src/app/app.models';
import { AngularFirestore } from '@angular/fire/firestore';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'epsi-pdf-detail-page',
  templateUrl: './pdf-detail-page.component.html',
  styleUrls: ['./pdf-detail-page.component.scss']
})
export class PdfDetailPageComponent implements OnInit {

  public id: string = this.route.snapshot.paramMap.get('id');
  public pdf$: Promise<Content>;

  public url: any;

  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    this.loadContent(this.id);
  }

  async loadContent(id: string) {
    this.pdf$ = this.data.getDocAlt<Content>(Collections.CONTENT, id);
    const { pdf } = await this.pdf$;
    this.url = this.sanitizeUrl(pdf);
  }

  sanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
