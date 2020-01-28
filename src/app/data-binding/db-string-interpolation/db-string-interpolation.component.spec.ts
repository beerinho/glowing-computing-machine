import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbStringInterpolationComponent } from './db-string-interpolation.component';

describe('DbStringInterpolationComponent', () => {
  let component: DbStringInterpolationComponent;
  let fixture: ComponentFixture<DbStringInterpolationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbStringInterpolationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbStringInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
