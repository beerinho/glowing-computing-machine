import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbBindingAssignmentComponent } from './db-binding-assignment.component';

describe('DbBindingAssignmentComponent', () => {
  let component: DbBindingAssignmentComponent;
  let fixture: ComponentFixture<DbBindingAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbBindingAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbBindingAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
