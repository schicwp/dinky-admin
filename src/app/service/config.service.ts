import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {Workflow} from "../model/config/workflow.model";
import {HttpClient} from "@angular/common/http";
import {Page} from "../model/page.model";
import {map} from "rxjs/internal/operators";
import {ContentType} from "../model/config/content-type.model";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {


  host:string = "http://localhost:8080";


  constructor(private httpClient:HttpClient) { }


  public getWorkflows():Observable<Workflow[]>{
    return this.httpClient.get<Page<Workflow>>(`/api/v1/workflow`).pipe(
      map(p => p.content)
    )
  }

  public getWorkflow(name:string):Observable<Workflow>{
    return this.httpClient.get<Workflow>(`/api/v1/workflow/${name}`)
  }

  public getContentTypes():Observable<ContentType[]>{
    return this.httpClient.get<Page<ContentType>>(`/api/v1/content-type`).pipe(
      map(p => p.content)
    )
  }

  public getContentType(name:string):Observable<ContentType>{
    return this.httpClient.get<ContentType>(`/api/v1/content-type/${name}`)
  }

}
