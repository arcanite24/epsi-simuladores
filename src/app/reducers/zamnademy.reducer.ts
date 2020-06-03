import { User, Todo } from '../app.models';
import { Action } from '@ngrx/store';

export interface IZamnaReducer {
  topUsers: User[];
  checklist: Todo[];
}

export const initialState: IZamnaReducer = {
  topUsers: null,
  checklist: null,
};

export enum ZamnaActionTypes {
  LoadTopUsers = '[Exam] LoadTopUsers',
  LoadChecklist = '[Exam] LoadChecklist',
}

export type ZamnaActions =
  LoadTopUsers |
  LoadChecklist;

export class LoadTopUsers implements Action {
  readonly type: string = ZamnaActionTypes.LoadTopUsers;
  constructor(public payload: User[]) {}
}

export class LoadChecklist implements Action {
  readonly type: string = ZamnaActionTypes.LoadChecklist;
  constructor(public payload: Todo[]) {}
}

export function zamnaReducer(state: IZamnaReducer = initialState, action: ZamnaActions) {
  switch (action.type) {
    case ZamnaActionTypes.LoadTopUsers:
      return { ...state, topUsers: action.payload };

    case ZamnaActionTypes.LoadChecklist:
        return { ...state, checklist: action.payload };

    default:
      return state;
  }
}
