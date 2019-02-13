import { Component, OnInit } from '@angular/core';
import {ContentFieldComponent} from "../../content-field/content-field.component";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent extends ContentFieldComponent implements OnInit {

  newValue:any;
  constructor() {
    super()
  }

  ngOnInit() {
  }

  addNewValue(){
    if (this.newValue) {
      if (!this.value)
        this.value = [];

      this.value.push(this.newValue)
      this.newValue = null;

      this.valueChange.emit(this.value)
    }
  }

  onNewValueChange(e){
    console.log(e)

    this.newValue = e;
  }

}
