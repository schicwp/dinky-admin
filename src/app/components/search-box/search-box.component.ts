import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SearchQuery} from "../../model/search-query.model";
import {SearchService} from "../../service/search.service";

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  indexes:string[] = [];
  q:string = "";
  index:string;

  @Output()
  search:EventEmitter<SearchQuery> = new EventEmitter();


  constructor(private searchService:SearchService) { }

  ngOnInit() {
    this.searchService.getIndexes().subscribe(i=>{
      this.indexes = i
      if (this.indexes.length > 0)
        this.index = this.indexes[0]
    })
  }

  doSearch(){
    this.search.emit(new SearchQuery(this.index,this.q))
  }

}
