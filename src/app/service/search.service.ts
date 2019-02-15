import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs/index";
import {Page} from "../model/page.model";
import {Content} from "../model/config/content.model";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  constructor(private httpClient:HttpClient) { }




  search(index:string, q:string,page:number,size:number):Observable<Page<Content>>{

    let params = new HttpParams()
      .set("page",`${page}`)
      .set("size",`${size}`)
      .set("q",q);

    return this.httpClient.get<Page<Content>>(`/api/v1/search/${index}`,{params:params})
  }

  getIndexes():Observable<string[]>{


    return this.httpClient.get<string[]>(`/api/v1/search`)

  }
}
