import { Component, OnInit, Input } from '@angular/core';
import { MoodRate } from 'src/app/app.models';
import { groupBy } from 'lodash'

@Component({
  selector: 'epsi-user-mood-overview',
  templateUrl: './user-mood-overview.component.html',
  styleUrls: ['./user-mood-overview.component.scss']
})
export class UserMoodOverviewComponent implements OnInit {

  @Input() public rates: MoodRate[]

  constructor() { }

  ngOnInit() {
  }

  get promedio(): any[] {

    if (!this.rates) return []
    let payload = {}

    const group = groupBy(this.rates, 'mood')

    for (const [key, value] of Object.entries(group)) {
      payload[key] = {mood: key, total: value.length}
    }

    return Object.values(payload)

  }

}
