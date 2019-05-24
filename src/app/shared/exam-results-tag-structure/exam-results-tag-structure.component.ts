import {Component, Input, OnInit} from '@angular/core';
import {ExamResults, ExamTagColor, Question} from "../../app.models";
import { flattenDeep, uniq } from 'lodash'

@Component({
  selector: 'epsi-exam-results-tag-structure',
  templateUrl: './exam-results-tag-structure.component.html',
  styleUrls: ['./exam-results-tag-structure.component.scss']
})
export class ExamResultsTagStructureComponent implements OnInit {

  @Input() public result: ExamResults
  @Input() public  colors: ExamTagColor[] = []

  public tags: any[] = []
  public tagColors: any = {}
  public extraTags: any[] = []
  private ignored_tags = ['tagbloqueado', 'ignorartag']

  constructor() { }

  ngOnInit() {
    this.loadStruct(this.result)
    this.initTagColors()
  }

  initTagColors() {

    if (!this.colors) return {}

    let payload = {}

    for (let color of this.colors) {
      payload[color.tag] = color.color;
    }

    this.tagColors = payload

  }

  loadStruct(r: ExamResults) {

    let struct = {}

    const allTags = Object.values(r.questions).map((q: Question) => q.raw.tags).filter(t => t)
    /*console.log(allTags)*/

    // Get extra tags
    const withExtra = allTags.filter(t => t.length > 3).map(t => t[3])
    const extraTags = uniq(flattenDeep(withExtra))
    this.extraTags = extraTags.map(tag => ({
      tag,
      value: this.getPromedioByTag(tag, this.result)
    }));

    // Remove ignored tags
    const removedIgnored = allTags.map(t => t.filter(tt => !this.ignored_tags.includes(tt)));
    const removedExtras: string[][] = removedIgnored.map(t => t.filter(tt => !extraTags.includes(tt)));
    /*console.log('removedExtras', removedExtras)*/

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
        /*console.log(struct[parent].children[child], family)*/

        // If have grandchildren, set those
        if (family.length > 0) {
          const grandchildren = family.shift()
          if (struct[parent].children[child].grandchildren && !struct[parent].children[child].grandchildren.includes(grandchildren)) struct[parent].children[child].grandchildren.push(grandchildren)
        }

      }

    }

    this.tags = Object.values(struct)
      .map((parent: any) => ({
        ...parent,
        value: this.getPromedioByTag(parent.tag, this.result),
        children: Object.values(parent.children).map((child: any) => ({
          ...child,
          value: this.getPromedioByTag(child.tag, this.result),
          grandchildren: uniq(child.grandchildren).map((grandchild: any) => ({
            value: this.getPromedioByTag(grandchild, this.result),
            tag: grandchild
          }))
        }))
      }));

  }

  private getPromedioByTag(tag: string, result: ExamResults) {

    const total = Object.values(result.questions)
      .map((q: any) => ({correcta: q.correcta, tags: q.raw.tags}))
      .filter((q: any) => q.tags && q.tags.includes(tag))

    const correctas = total.filter((q: any) => q.correcta).length

    return correctas / total.length

  }

}
