import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/app.models';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Observable } from 'rxjs';
import { IExamReducer, SetIndex } from 'src/app/reducers/exam.reducer';

@Component({
  selector: 'epsi-exam-progress-widget',
  templateUrl: './exam-progress-widget.component.html',
  styleUrls: ['./exam-progress-widget.component.scss']
})
export class ExamProgressWidgetComponent implements OnInit {

  @Input() public questions: Question[]
  public completed: string[] = []
  public activeIndex: number = 0

  private examState$: Observable<IExamReducer>

  constructor(
    private store: Store<AppState>
  ) {
    this.examState$ = this.store.select('exam')
  }

  ngOnInit() {
    this.examState$.subscribe(state => {
      if (state.results && state.results.questions) this.completed = Object.keys(state.results.questions)
      if (state.finished) this.completed = []
      this.activeIndex = state.index
    })
  }

  gotoQuestion(index: number) {
    this.store.dispatch(new SetIndex(index))
  }

}
