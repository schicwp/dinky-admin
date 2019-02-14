import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../service/search.service";
import {Content} from "../../model/config/content.model";
import {Page} from "../../model/page.model";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  indexes:string[] = [];
  q:string = "";
  result:Page<Content>;
  index:string;
  currentPage:number = 0;


  constructor(private searchService:SearchService) { }

  ngOnInit() {

    this.searchService.getIndexes().subscribe(i=>{
      this.indexes = i
      if (this.indexes.length > 0)
        this.index = this.indexes[0]
    })
  }

  search(q:string){
    this.searchService.search(this.index,q,this.currentPage,10).subscribe( c=> this.result = c)
  }

  setPage(p:number){
    this.currentPage = p;
    this.search(this.q)

  }


}
