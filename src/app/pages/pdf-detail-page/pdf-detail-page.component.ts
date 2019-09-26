import { Component, OnInit, Sanitizer } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content, Collections } from 'src/app/app.models';
import { DataService } from 'src/app/services/data.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'epsi-pdf-detail-page',
  templateUrl: './pdf-detail-page.component.html',
  styleUrls: ['./pdf-detail-page.component.scss']
})
export class PdfDetailPageComponent implements OnInit {

  public id: string = this.route.snapshot.paramMap.get('id');
  public pdf$: Promise<Content>;

  public urls: any;

  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    private modal: NgxSmartModalService,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    this.loadContent(this.id);
    setTimeout(() => {
      this.modal.getModal('upsaleModal').open();
    }, 1000);
  }

  async loadContent(id: string) {
    this.pdf$ = this.data.getDocAlt<Content>(Collections.CONTENT, id);
    const { pdf } = await this.pdf$;
    this.urls = this.sanitizer.bypassSecurityTrustResourceUrl(pdf);
  }

}
