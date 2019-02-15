import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModalOptions} from "@ng-bootstrap/ng-bootstrap";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-submission-error-dialog',
  templateUrl: './submission-error-dialog.component.html',
  styleUrls: ['./submission-error-dialog.component.css']
})
export class SubmissionErrorDialogComponent implements OnInit {

  @Input()
  error:HttpErrorResponse;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
