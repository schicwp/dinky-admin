import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../service/search.service";
import {Content} from "../../model/config/content.model";
import {Page} from "../../model/page.model";
import {SearchQuery} from "../../model/search-query.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  q:SearchQuery;
  result:Page<Content>;
  currentPage:number = 0;


  constructor(private searchService:SearchService, private activedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activedRoute.params.subscribe((params:any)=>{
      if (params.index && params.query){
        this.q = new SearchQuery(params.index,params.query)
        this.searchService.search(this.q.index,this.q.query,this.currentPage,10).subscribe( c=> this.result = c)

      }

    })


  }

  search(q:SearchQuery){
    this.q = q;
    this.searchService.search(q.index,q.query,this.currentPage,10).subscribe( c=> this.result = c)
  }

  setPage(p:number){
    this.currentPage = p;
    this.search(this.q)

  }


}
