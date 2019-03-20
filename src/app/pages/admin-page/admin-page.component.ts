import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Collections, MoodRate } from 'src/app/app.models';
import { groupBy } from 'lodash'

@Component({
  selector: 'epsi-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  public rates: any[]

  constructor(
    private data: DataService
  ) { }

  ngOnInit() {

    this.loadRates()

  }

  async loadRates() {

    const rates = await this.data.getCollection<MoodRate>(Collections.MOOD_RATE)

    if (!rates) return []
    let payload = {}

    const group = groupBy(rates, 'mood')

    for (const [key, value] of Object.entries(group)) {
      payload[key] = {mood: key, total: value.length}
    }

    this.rates = Object.values(payload)

  }

}
