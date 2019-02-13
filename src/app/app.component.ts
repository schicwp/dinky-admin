import {Component, OnInit} from '@angular/core';
import {ConfigService} from "./service/config.service";
import {ContentType} from "./model/config/content-type.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dinky-explorer';


  contentTypes:ContentType[]

  constructor(private configService:ConfigService){
  }

  ngOnInit(){
    this.configService.getContentTypes().subscribe(c=> this.contentTypes = c)
  }
}
