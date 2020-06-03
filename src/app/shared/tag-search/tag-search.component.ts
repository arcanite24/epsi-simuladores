import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'epsi-tag-search',
  templateUrl: './tag-search.component.html',
  styleUrls: ['./tag-search.component.scss']
})
export class TagSearchComponent implements OnInit {

  @Input() public tags: string[] = []
  @Output() public tagSelect: EventEmitter<string> = new EventEmitter()

  public searchTag = (text$: Observable<string>) => {
    if (!this.tags) return of([])
    return text$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        map(tag => tag.length < 2 ? [] : this.tags.filter(t => t.toLowerCase().indexOf(tag.toLowerCase()) > -1).slice(0, 10))
      )
  }

  constructor() { }

  ngOnInit() {
  }

}
