import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Sort, SortDirection} from "../../model/sort.model";

@Component({
  selector: 'app-sort-control',
  templateUrl: './sort-control.component.html',
  styleUrls: ['./sort-control.component.css']
})
export class SortControlComponent implements OnInit {

  @Input()
  sort:Sort;

  @Input()
  field:string;

  @Output()
  sortChanged:EventEmitter<Sort> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSortChange(){
    this.sortChanged.emit(
      new Sort(this.field, this.sort.asc()?SortDirection.DESC:SortDirection.ASC)
    )
  }

}
