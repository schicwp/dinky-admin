import {Component, OnInit} from '@angular/core';
import {ConfigService} from "./service/config.service";
import {ContentType} from "./model/config/content-type.model";
import {AuthService} from "./service/auth.service";
import {User} from "./model/config/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  contentTypes:ContentType[]

  user:User;

  constructor(private configService:ConfigService, private authService:AuthService){
  }

  ngOnInit(){
    this.configService.getContentTypes().subscribe(c=> this.contentTypes = c)
    this.authService.getCurrentUser().subscribe(u => this.user = u)
  }

  login(username:string, password:string){
    this.authService.login(username,password).subscribe(u=> this.ngOnInit())
  }

  logout(){
    this.authService.logout()
  }
}
