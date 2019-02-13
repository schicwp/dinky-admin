import { Component, OnInit } from '@angular/core';
import {Workflow} from "../../model/config/workflow.model";
import {ConfigService} from "../../service/config.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-workflow-details',
  templateUrl: './workflow-details.component.html',
  styleUrls: ['./workflow-details.component.css']
})
export class WorkflowDetailsComponent implements OnInit {

  workflow:Workflow
  constructor(private configService:ConfigService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((p:any)=>{
      this.configService.getWorkflow(p.name).subscribe(w=>this.workflow = w);
    })


  }

}
