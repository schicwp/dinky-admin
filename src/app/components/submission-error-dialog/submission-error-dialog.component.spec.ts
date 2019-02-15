import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionErrorDialogComponent } from './submission-error-dialog.component';

describe('SubmissionErrorDialogComponent', () => {
  let component: SubmissionErrorDialogComponent;
  let fixture: ComponentFixture<SubmissionErrorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionErrorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionErrorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
