import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { InstantSearchConfig } from 'angular-instantsearch/instantsearch/instantsearch';
import { environment } from 'src/environments/environment';
import * as algolia from 'algoliasearch/lite';

const client = algolia(environment.algolia.appId, environment.algolia.apiKey)

@Component({
  selector: 'epsi-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() private indexName: string = 'dev_QUESTIONS'
  @Input() public placeholder: string = 'Ingresa tu búsqueda aquí...'

  @Output() private onSelect: EventEmitter<any> = new EventEmitter()

  private index: algolia.Index = client.initIndex(this.indexName)
  public showResults: boolean = false
  public hits: any[]

  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  searchChanged(query: any) {
    this.showResults = !!query.length
  }

  hitSelected(hit: any) {
    this.onSelect.next(hit)
  }

  handleSearch(query: string) {

    if (!query) return this.showResults = false
    if (query.length <= 0) return this.showResults = false

    this.index.search({query}, (err, res) => {
      if (!err) this.showResults = true
      this.hits = res.hits
      this.cd.detectChanges()
    })

  }

}
