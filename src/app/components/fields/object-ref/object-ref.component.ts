import { Component, OnInit } from '@angular/core';
import {ContentFieldComponent} from "../../content-field/content-field.component";
import {ContentService} from "../../../service/content.service";
import {Content} from "../../../model/config/content.model";

@Component({
  selector: 'app-object-ref',
  templateUrl: './object-ref.component.html',
  styleUrls: ['./object-ref.component.css']
})
export class ObjectRefComponent extends ContentFieldComponent implements OnInit {

  content:Content;

  options:Content[];

  constructor(private contentService:ContentService) {
    super()
  }

  ngOnInit() {


    if (this.value)
      this.contentService.get(this.value).subscribe(c=>this.content = c)

    this.contentService.list(this.field.config.referencedType ,0,10).subscribe(p=>
      this.options = p.content
    )

  }

  search(e){
    this.contentService.search(this.field.config.referencedType ,`{name:{$regex:/.*${e}.*/}}`,0,10).subscribe(p=>
      this.options = p.content
    )
  }

  onChange(e){
    if (e)
      this.valueChange.emit(e.id)
  }

}
