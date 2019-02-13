import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../../service/config.service";
import {Workflow} from "../../model/config/workflow.model";

@Component({
  selector: 'app-workflow-list',
  templateUrl: './workflow-list.component.html',
  styleUrls: ['./workflow-list.component.css']
})
export class WorkflowListComponent implements OnInit {

  workflows:Workflow[]

  constructor(private configService:ConfigService) { }

  ngOnInit() {
    this.configService.getWorkflows().subscribe(w=> this.workflows = w)
  }

}
