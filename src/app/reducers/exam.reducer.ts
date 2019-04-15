import { Action } from '@ngrx/store';
import { Question, Answer, ExamResults } from '../app.models';

export enum ExamActionTypes {
  SetQuestion = '[Exam] SetQuestion',
  SetIndex = '[Exam] SetIndex',
  SetAnswer = '[Exam] SetAnswer',
  SetResults = '[Exam] SetResults',
  FinishExam = '[Exam] FinishExam',
  ResetExam = '[Exam] ResetExam',
  SetFeedback = '[Exam] SetFeedback',
  SetTimer = '[Exam] SetTimer',
}

export class SetQuestion implements Action {
  readonly type: string = ExamActionTypes.SetQuestion
  constructor(public payload: Question | Question[]) {}
}

export class SetIndex implements Action {
  readonly type: string = ExamActionTypes.SetIndex
  constructor(public payload: number) {}
}

export class SetFeedback implements Action {
  readonly type: string = ExamActionTypes.SetFeedback
  constructor(public payload: string) {}
}

export class SetTimer implements Action {
  readonly type: string = ExamActionTypes.SetTimer
  constructor(public payload: number) {}
}

export class SetAnswer implements Action {
  readonly type: string = ExamActionTypes.SetAnswer
  constructor(public payload: Answer) {}
}

export class SetResults implements Action {
  readonly type: string = ExamActionTypes.SetResults
  constructor(public payload: ExamResults) {}
}

export class FinishExam implements Action {
  readonly type: string = ExamActionTypes.FinishExam
  constructor(public payload?) {}
}

export class ResetExam implements Action {
  readonly type: string = ExamActionTypes.ResetExam
  constructor(public payload?) {}
}

export type ExamActions = 
  SetQuestion |
  SetIndex |
  SetAnswer |
  SetResults |
  FinishExam |
  ResetExam

export interface IExamReducer {
  question: Question | Question[],
  index: number,
  selectedAnswer: Answer,
  results: ExamResults,
  finished: boolean,
  feedback: string,
  timer: number,
}

export const initialState: IExamReducer = {
  question: null,
  index: 0,
  selectedAnswer: null,
  results: null,
  finished: false,
  feedback: null,
  timer: 0,
}

export function examReducer(state: IExamReducer = initialState, action: ExamActions) {
  switch (action.type) {

    case ExamActionTypes.SetIndex:
      return { ...state, index: action.payload }

    case ExamActionTypes.SetFeedback:
      return { ...state, feedback: action.payload }

    case ExamActionTypes.SetTimer:
      return { ...state, timer: action.payload }

    case ExamActionTypes.SetQuestion:
      return { ...state, question: action.payload }

    case ExamActionTypes.SetAnswer:
      if (action.payload) {
        localStorage.setItem(action.payload.parent, JSON.stringify(action.payload));
        console.log('seting answer cache', action.payload)
      }
      return { ...state, selectedAnswer: action.payload }

    case ExamActionTypes.SetResults:
      return { ...state, results: action.payload }

    case ExamActionTypes.FinishExam:
      return { ...state, finished: true }

    case ExamActionTypes.ResetExam:
      return initialState

    default:
      return state

  }
}
