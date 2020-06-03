import { Observable } from 'rxjs';
export interface CrudTableConfig<T = any> {
  pk?: string;
  collection: string;
  dataSource?: Observable<T[]>;
  showControls?: boolean;
  controlsText?: string;
  headers: CrudTableHeader[];
  customActions?: CrudTableAction[];
  documentDefaults?: any;
  disableAdd?: boolean;
  disableEdit?: boolean;
  fullEdit?: boolean;
  disableTimestamp?: boolean;
  preCreate?: (row: any) => any;
  postCreate?: <I>(row: I) => void;
  postEdit?: (row: T, old_item: T) => void;
  preDelete?: (id: string) => void;
  postDelete?: (id: string) => void;
  instructions?: string;
}

export interface CrudTableHeader {
  field: string;
  type: string;
  label?: string;
  noEdit?: boolean;
  editPlaceholder?: string;
  customRender?: (row: any, i: number) => string;
  customHTML?: (row: any, i: number) => string;
  selectData?: Observable<any>;
  selectKey?: string;
  selectLabel?: string;
  selectCustomValue?: (row: any, i: number, selectedValue: any) => any;
  selectMultiple?: boolean;
  hideOnTable?: boolean;
  preEdit?: Function;
  arrayDefault?: any;
  arrayType?: string;
}

export interface CrudTableAction {
  iconClasses: string;
  handler: (row: any, rowIndex: number, actionIndex: number) => void;
}

export interface CrudTableSelectOption {
  label: string;
  value: any;
}

export interface CrudTableFullEditConfig {
  modelConfig: CrudTableConfig;
  title?: string;
}
