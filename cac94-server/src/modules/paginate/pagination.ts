import { PaginationResultInterface } from './pagination.results.interface';

export class Pagination<PaginationEntity> {
  public results: PaginationEntity[];
  public page_total: number;
  public total: number;

  constructor(paginationResults: PaginationResultInterface<PaginationEntity>) {
       if(paginationResults.results){
        this.results = paginationResults.results;
        this.page_total = paginationResults.results.length;
        this.total = paginationResults.total;
       }
  }
}
