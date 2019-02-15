import {Component, OnInit} from '@angular/core';
import {ConfigService} from "./service/config.service";
import {ContentType} from "./model/config/content-type.model";
import {AuthService} from "./service/auth.service";
import {User} from "./model/config/user.model";
import {SearchQuery} from "./model/search-query.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  contentTypes:ContentType[]

  user:User;

  constructor(private configService:ConfigService, private authService:AuthService, private router:Router){
  }

  ngOnInit(){
    this.authService.getCurrentUser().subscribe(u => this.user = u)
    this.configService.getContentTypes().subscribe(c=> this.contentTypes = c)

  }

  login(username:string, password:string){
    this.authService.login(username,password).subscribe(u=> this.ngOnInit())
  }

  logout(){
    this.authService.logout()
  }

  search(query:SearchQuery){
    this.router.navigate([`/search/${query.index}/${query.query}`])
  }
}
