import {Component, Input, OnInit} from '@angular/core';
import {ExamResults, Question} from "../../app.models";
import { flattenDeep, uniq } from 'lodash'

@Component({
  selector: 'epsi-exam-results-tag-structure',
  templateUrl: './exam-results-tag-structure.component.html',
  styleUrls: ['./exam-results-tag-structure.component.scss']
})
export class ExamResultsTagStructureComponent implements OnInit {

  @Input() public result: ExamResults
  public tags: any[] = []
  private ignored_tags = ['tagbloqueado', 'ignorartag']

  constructor() { }

  ngOnInit() {
    this.loadStruct(this.result)
  }

  loadStruct(r: ExamResults) {

    let struct = {}

    const allTags = Object.values(r.questions).map((q: Question) => q.raw.tags).filter(t => t)
    console.log(allTags)

    // Get extra tags
    const withExtra = allTags.filter(t => t.length > 3).map(t => t[3])
    const extraTags = uniq(flattenDeep(withExtra))

    // Remove ignored tags
    const removedIgnored = allTags.map(t => t.filter(tt => !this.ignored_tags.includes(tt)));
    const removedExtras: string[][] = removedIgnored.map(t => t.filter(tt => !extraTags.includes(tt)));

    // Set struct
    for (let family of removedExtras) {

      // Get and set parent
      const parent = family.shift()
      if (!struct[parent]) struct[parent] = {tag: parent, children: {}}

      // If have children, now set children
      if (family.length > 0) {
        const child = family.shift()
        struct[parent].children[child] = {tag: child, grandchildren: {}}
      }

    }

    console.log('struct', struct)

  }

}
