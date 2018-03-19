import { Company } from '../company-management/company.models';

export class DataSetModels {
  constructor(
    public id: number,
    public name: string,
    public company: Company,
    public data?: Array<object>,
  ) {  }
}