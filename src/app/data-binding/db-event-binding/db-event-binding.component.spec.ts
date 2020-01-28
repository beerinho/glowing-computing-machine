import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbEventBindingComponent } from './db-event-binding.component';

describe('DbEventBindingComponent', () => {
  let component: DbEventBindingComponent;
  let fixture: ComponentFixture<DbEventBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbEventBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
