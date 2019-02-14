import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-config-view',
  templateUrl: './config-view.component.html',
  styleUrls: ['./config-view.component.css']
})
export class ConfigViewComponent implements OnInit, OnChanges {

  @Input()
  value:any;


  display:string;

  constructor() { }

  ngOnInit() {
    this.display = this.renderValue(this.value,0)
  }

  ngOnChanges(changes:SimpleChanges){

    if (changes.value)
      this.display = this.renderValue(changes.value.currentValue,0)
  }


  renderValue(value:any, depth:number):string{

    if (!value)
      return "";

    if (value instanceof String ||
      typeof value === "string" ||
       value instanceof Number ||
      typeof value === "number" ||
        value instanceof Date ||
        value instanceof Boolean ||
      typeof value === "boolean"
    ) {
      console.log("Primative")
      return value as string;
    }

    if (value instanceof Array){
      let s = depth == 0?"": "\n";

      value.forEach(v=>{
        s+=`${this.spaces(depth)}- ${this.renderValue(v, depth+1)}\n`
      });

      return s;
    }


    let s = depth == 0?"": "\n";

    let lines = Object.keys(value).map(key => `${this.spaces(depth)}${key}: ${this.renderValue(value[key], depth+1)}`)



    return lines.length > 0?s + lines.join("\n"):" <empty> ";


  }

  spaces(depth:number){
    let r = "";

    for (let i = 0; i < depth; i++){
      r = r+" ";
    }

    return r;
  }




}
