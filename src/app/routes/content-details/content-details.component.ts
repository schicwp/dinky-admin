import { Component, OnInit } from '@angular/core';
import {ContentService} from "../../service/content.service";
import {ConfigService} from "../../service/config.service";
import {ActivatedRoute} from "@angular/router";
import {Content} from "../../model/config/content.model";
import {ContentType} from "../../model/config/content-type.model";
import {Workflow} from "../../model/config/workflow.model";
import {ContentSubmission} from "../../model/config/content-submission.model";
import {Action} from "../../model/config/action.model";
import {Page} from "../../model/page.model";
import {NgbModal, NgbModalOptions} from "@ng-bootstrap/ng-bootstrap";
import {SubmissionErrorDialogComponent} from "../../components/submission-error-dialog/submission-error-dialog.component";

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.css']
})
export class ContentDetailsComponent implements OnInit {
  content:Content;
  contentType:ContentType
  workflows:{[s:string]:Workflow} = {};
  history:Page<Content>;

  state:string = "view";

  constructor(private contentService:ContentService, private configService:ConfigService,
              private activatedRoute:ActivatedRoute, private modalService: NgbModal) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((p:any)=>{

      this.contentService.get(p.id).subscribe(content=>{
        this.content = content;

        this.configService.getContentType(this.content.type).subscribe(c=>{
          this.contentType = c

          this.contentType.workflows.forEach(wn=>{
            this.configService.getWorkflow(wn).subscribe(w => this.workflows[wn] = w)
          })
        })
      })

      this.contentService.getHistory(p.id,0,10).subscribe( h=>this.history = h)


    })

  }

  save(){
    this.contentService.submit(new ContentSubmission(
      this.content.id,
      this.content.type,
      this.content.version,
      null,
      null,
      this.content.content
    )).subscribe( c=> {
      this.content = c;
      this.state = 'view'
      this.ngOnInit()
    },e=>
      this.modalService
        .open(SubmissionErrorDialogComponent, {} as NgbModalOptions)
        .componentInstance.error = e
    )
  }

  cancel(){
    this.ngOnInit()
    this.state = 'view'
  }

  executeAction(action:string){
    this.contentService.submit(new ContentSubmission(
      this.content.id,
      this.content.type,
      this.content.version,
      this.content.workflow,
      action,
      this.content.content
    )).subscribe( c=> {
      this.content = c;
      this.state = 'view'
    },(e)=> {
      this.modalService
        .open(SubmissionErrorDialogComponent, {} as NgbModalOptions)
        .componentInstance.error = e

    })
  }

  getAvailableActions(content:Content):Action[]{

    let workflow:Workflow = this.workflows[content.workflow];

    let actions = [];

    workflow.actions.forEach(action=>{
      if (!action.sourceStates || action.sourceStates.length == 0 || action.sourceStates.indexOf(content.state) >= 0){
        actions.push(action)
      }
    });

    return actions

  }



}
