import { Component, OnInit } from '@angular/core';
import {ContentService} from "../../service/content.service";
import {ActivatedRoute} from "@angular/router";
import {Page} from "../../model/page.model";
import {Content} from "../../model/config/content.model";
import {ConfigService} from "../../service/config.service";
import {ContentType} from "../../model/config/content-type.model";
import {Workflow} from "../../model/config/workflow.model";
import {Action} from "../../model/config/action.model";
import {ContentSubmission} from "../../model/config/content-submission.model";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  contentType:ContentType;
  workflows:{[name:string]:Workflow} = {}
  page:Page<Content>;
  type:string;
  currentPage:number = 0;

  constructor(private contentService:ContentService,private activatedRoute:ActivatedRoute, private configService:ConfigService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((p:any)=> {
      this.currentPage = 0;
      this.type = p.type;
      this.refresh()

      this.configService.getContentType(this.type).subscribe(c=>{
        this.contentType = c

        this.contentType.workflows.forEach(wn=>{
          this.configService.getWorkflow(wn).subscribe(w => this.workflows[wn] = w)
        })

      })

    })
  }

  setPage(p:number){
    console.log("Setting page: " + p)
    this.currentPage = p;
    this.refresh()
  }

  refresh(){

      this.contentService.list(this.type,this.currentPage,10).subscribe(p=>{
        this.page = p;

      })

  }

  getAvailableActions(content:Content):Action[]{

    let workflow:Workflow = this.workflows[content.workflow]

    if (!workflow)
      return [];

    let actions = [];

    workflow.actions.forEach(action=>{
      if (!action.sourceStates || action.sourceStates.length == 0 || action.sourceStates.indexOf(content.state) >= 0){
        actions.push(action)
      }
    })

    return actions

  }

  performAction(content:Content, action:Action){

    this.contentService.submit(new ContentSubmission(
      content.id,
      content.type,
      content.version,
      content.workflow,
      action.name,
    )).subscribe(c => this.refresh())

  }


}
