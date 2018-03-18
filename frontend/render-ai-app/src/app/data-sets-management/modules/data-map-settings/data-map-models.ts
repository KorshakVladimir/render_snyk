export class DataMapModels {
  constructor(
    public id: number,
    public name: string,
    public data?: Array<DataMapItem>,
    public primary_columns?: DataMapItem,
  ) {  }
}

export class DataMapItem {
  constructor(
    public origin_column: string,
    public new_set_column: string,
  ) {  }
}
