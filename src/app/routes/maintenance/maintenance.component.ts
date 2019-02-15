import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../service/search.service";

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {

  indexes:string[] = [];
  index:string;



  constructor(private searchService:SearchService) { }

  ngOnInit() {
    this.searchService.getIndexes().subscribe(i=>{
      this.indexes = i
      if (this.indexes.length > 0)
        this.index = this.indexes[0]
    })
  }

  rebuildIndex(index:string){
    this.searchService.rebuildIndex(index).subscribe(()=>this.ngOnInit())
  }


}
