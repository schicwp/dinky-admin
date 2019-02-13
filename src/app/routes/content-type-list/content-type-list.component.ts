import { Component, OnInit } from '@angular/core';
import {ContentType} from "../../model/config/content-type.model";
import {ConfigService} from "../../service/config.service";

@Component({
  selector: 'app-content-type-list',
  templateUrl: './content-type-list.component.html',
  styleUrls: ['./content-type-list.component.css']
})
export class ContentTypeListComponent implements OnInit {

  contentTypes:ContentType[]

  constructor(private configService:ConfigService) { }

  ngOnInit() {
    this.configService.getContentTypes().subscribe(w=> this.contentTypes = w)
  }

}
