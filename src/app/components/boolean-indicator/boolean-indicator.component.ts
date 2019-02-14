import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-boolean-indicator',
  templateUrl: './boolean-indicator.component.html',
  styleUrls: ['./boolean-indicator.component.css']
})
export class BooleanIndicatorComponent implements OnInit {

  @Input()
  value:boolean

  constructor() { }

  ngOnInit() {
  }

}
