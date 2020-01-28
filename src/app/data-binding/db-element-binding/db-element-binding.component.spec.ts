import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbElementBindingComponent } from './db-element-binding.component';

describe('DbElementBindingComponent', () => {
  let component: DbElementBindingComponent;
  let fixture: ComponentFixture<DbElementBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbElementBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbElementBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
