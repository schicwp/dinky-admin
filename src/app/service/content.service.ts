import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Page} from "../model/page.model";
import {Content} from "../model/config/content.model";
import {Observable} from "rxjs/index";
import {ContentSubmission} from "../model/config/content-submission.model";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private httpClient:HttpClient) { }



  list(type:string,page:number,size:number):Observable<Page<Content>>{

    let params = new HttpParams()
      .set("type",type)
      .set("page",`${page}`)
      .set("size",`${size}`);

    return this.httpClient.get<Page<Content>>("/api/v1/content",{params:params})
  }

  search(type:string,q:string,page:number,size:number):Observable<Page<Content>>{

    let params = new HttpParams()
      .set("type",type)
      .set("page",`${page}`)
      .set("size",`${size}`)
      .set("q",q);

    return this.httpClient.get<Page<Content>>("/api/v1/content",{params:params})
  }

  submit(content:ContentSubmission):Observable<Content>{
    return this.httpClient.post<Content>("/api/v1/content",content)

  }

  get(id:string):Observable<Content>{
    return this.httpClient.get<Content>(`/api/v1/content/${id}`)
  }

  getHistory(id:string,page:number,size:number):Observable<Page<Content>>{

    let params = new HttpParams()
      .set("page",`${page}`)
      .set("size",`${size}`);


    return this.httpClient.get<Page<Content>>(`/api/v1/content/${id}/history`,{params:params})

  }
}
