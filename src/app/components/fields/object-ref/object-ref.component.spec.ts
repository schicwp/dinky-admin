import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectRefComponent } from './object-ref.component';

describe('ObjectRefComponent', () => {
  let component: ObjectRefComponent;
  let fixture: ComponentFixture<ObjectRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
