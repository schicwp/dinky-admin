import { Component, OnInit } from '@angular/core';
import {ContentType} from "../../model/config/content-type.model";
import {ConfigService} from "../../service/config.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-content-type-details',
  templateUrl: './content-type-details.component.html',
  styleUrls: ['./content-type-details.component.css']
})
export class ContentTypeDetailsComponent implements OnInit {

  contentType:ContentType
  constructor(private configService:ConfigService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((p:any)=>{
      this.configService.getContentType(p.name).subscribe(w=>this.contentType = w);
    })


  }

}
