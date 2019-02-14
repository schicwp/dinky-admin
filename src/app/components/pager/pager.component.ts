import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Page} from "../../model/page.model";

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit,OnChanges {

  @Input()
  page:Page<any>;
  surroundingPages:number[];

  @Output()
  pageChange:EventEmitter<number> = new EventEmitter();


  constructor() { }

  ngOnInit() {
    this.pageChange.emit(0)
    this.surroundingPages = [];
  }

  setPage(p:number){
    this.pageChange.emit(p)
  }

  ngOnChanges(changes:SimpleChanges):void{
    if (changes.page){
      this.refresh()
    }

    if (!this.page)
      this.pageChange.emit(0)


  }

  refresh(){

    if (!this.page)
      return;

    this.surroundingPages = [];


    let windowStart = this.page.number - 3;
    let windowEnd = this.page.number + 4;

    if (this.page.totalPages <= 7){
      windowStart = 0;
      windowEnd = this.page.totalPages ;
    }


    let rShift = Math.max(0 - windowStart,0);
    let lShift = Math.min(this.page.totalPages - windowEnd,0);

    windowStart += rShift + lShift;
    windowEnd += rShift + lShift ;


    for (let i = windowStart; i < windowEnd;i++){
      this.surroundingPages.push(i)
    }
  }

}
