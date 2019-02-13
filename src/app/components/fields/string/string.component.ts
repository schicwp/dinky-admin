import { Component, OnInit } from '@angular/core';
import {ContentFieldComponent} from "../../content-field/content-field.component";

@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.css']
})
export class StringComponent extends ContentFieldComponent implements OnInit {

  constructor() {
    super()
  }

  ngOnInit() {
  }

}
