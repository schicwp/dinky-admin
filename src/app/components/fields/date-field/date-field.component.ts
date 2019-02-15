import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ContentFieldComponent} from "../../content-field/content-field.component";
import {NgbDateStruct, NgbTimeStruct} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.css']
})
export class DateFieldComponent extends ContentFieldComponent implements OnInit, OnChanges {


  date:NgbDateStruct;
  time:NgbTimeStruct;

  constructor() {
    super()
  }

  ngOnInit() {
    this.setControls(this.value)
  }

  setControls(value:any){
    if (!value){
      this.date = null;
      this.time = null;
      return;
    }

    let input = new Date(this.value)

    this.date = {year:input.getFullYear(),month:input.getMonth() + 1,day:input.getDate()} as NgbDateStruct
    this.time = {hour:input.getHours(),minute:input.getMinutes(),second:input.getSeconds()} as NgbTimeStruct
  }

  ngOnChanges(changes: SimpleChanges): void{
    if (changes.value){
      this.setControls(changes.value.currentValue)
    }
  }

  onChange(){
    let result:Date = null;

    if (this.date && this.time){
      result = new Date();
      result.setFullYear(this.date.year,this.date.month -1,this.date.day)
      result.setHours(this.time.hour,this.time.minute,this.time.second)
    }

    this.valueChange.emit(result)
  }
}
