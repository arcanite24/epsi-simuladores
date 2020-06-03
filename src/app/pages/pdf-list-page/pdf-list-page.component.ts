import { Component, OnInit } from '@angular/core';
import { Content, Collections } from 'src/app/app.models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'epsi-pdf-list-page',
  templateUrl: './pdf-list-page.component.html',
  styleUrls: ['./pdf-list-page.component.scss']
})
export class PdfListPageComponent implements OnInit {

  public list: Content[] = [];

  constructor(
    private data: DataService,
  ) { }

  ngOnInit() {
    this.loadList();
  }

  async loadList() {

    const parents = await this.data.getCollectionQueryAlt<Content>(Collections.CONTENT, 'isPdf', '==', true);
    const filter = parents.filter(p => !p.parent_id);

    for (const parent of filter) {
      const children = await this.data.getCollectionQueryAlt<Content>(Collections.CONTENT, 'parent_id', '==', parent.id);
      parent.children = children;
      parent.showChildren = false;
      this.list.push(parent);
    }

  }

}
