import { IExamReducer } from './reducers/exam.reducer';
import { IZamnaReducer } from './reducers/zamnademy.reducer';

export interface AppState {
  exam: IExamReducer;
  zamna: IZamnaReducer;
}
