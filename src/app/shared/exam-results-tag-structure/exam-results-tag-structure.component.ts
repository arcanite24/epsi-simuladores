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
    /*console.log(allTags)*/

    // Get extra tags
    const withExtra = allTags.filter(t => t.length > 3).map(t => t[3])
    const extraTags = uniq(flattenDeep(withExtra))

    // Remove ignored tags
    const removedIgnored = allTags.map(t => t.filter(tt => !this.ignored_tags.includes(tt)));
    const removedExtras: string[][] = removedIgnored.map(t => t.filter(tt => !extraTags.includes(tt)));
    console.log('removedExtras', removedExtras)

    // Set struct
    const _removedExtras = [...removedExtras]
    for (let family of _removedExtras) {

      // Get and set parent
      const parent = family.shift()
      if (!struct[parent]) struct[parent] = {tag: parent, children: {}}

      // If have children, now set children
      if (family.length > 0) {

        const child = family.shift()
        if (!struct[parent].children[child]) struct[parent].children[child] = {tag: child, grandchildren: []}
        console.log(struct[parent].children[child], family)

        // If have grandchildren, set those
        if (family.length > 0) {
          const grandchildren = family.shift()
          if (struct[parent].children[child].grandchildren && !struct[parent].children[child].grandchildren.includes(grandchildren)) struct[parent].children[child].grandchildren.push(grandchildren)
        }

      }

    }

    console.log('struct', struct)

  }

}
