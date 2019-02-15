import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs/index";
import {Page} from "../model/page.model";
import {Content} from "../model/config/content.model";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Sort, SortDirection} from "../model/sort.model";
import {SearchContent} from "../model/search-content.model";

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  constructor(private httpClient:HttpClient) { }




  search(index:string, q:string,page:number,size:number, sort:Sort = new Sort('_score',SortDirection.DESC)):Observable<Page<SearchContent>>{

    let params = new HttpParams()
      .set("page",`${page}`)
      .set("size",`${size}`)
      .set("sort",`${sort}`)
      .set("q",q);

    if (sort.field != "_score")
      params = params.append("sort",`_score,DESC`)

    return this.httpClient.get<Page<SearchContent>>(`/api/v1/search/${index}`,{params:params})
  }

  getIndexes():Observable<string[]>{


    return this.httpClient.get<string[]>(`/api/v1/search`)

  }

  rebuildIndex(index:string){
    return this.httpClient.delete(`/api/v1/search/${index}`)
  }
}
