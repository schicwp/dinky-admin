import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Field} from "../../model/config/field.model";

@Component({
  selector: 'app-content-field',
  templateUrl: './content-field.component.html',
  styleUrls: ['./content-field.component.css']
})
export class ContentFieldComponent implements OnInit {

  @Input()
  state:string;
  @Input()
  value:any;
  @Input()
  field:Field

  @Output()
  valueChange:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
