import { ExamResults, Collections } from 'src/app/app.models';
import { DataService } from './../../services/data.service';
import { Component, OnInit, Input } from '@angular/core';
import moment from 'moment';
import { sortBy } from 'lodash';

@Component({
  selector: 'epsi-user-exam-line-chart',
  templateUrl: './user-exam-line-chart.component.html',
  styleUrls: ['./user-exam-line-chart.component.scss']
})
export class UserExamLineChartComponent implements OnInit {

  @Input() user: string;
  @Input() exam: string;

  public chartData: any[];

  constructor(
    private data: DataService,
  ) { }

  ngOnInit() {
    if (this.user && this.exam) { this.loadChartData(this.user, this.exam); }
  }

  async loadChartData(user: string, exam: string) {

    const results = await this.data.getCollectionQuery<ExamResults>(Collections.EXAM_RESULT, ref => ref
      .where('user', '==', user)
      .where('exam', '==', exam));

    this.chartData = [{
      name: 'Resultados',
      series: sortBy(results, 'date').map(r => ({
        name: moment(r.date).calendar(),
        value: r.promedio * 10
      }))
    }];

  }

}
