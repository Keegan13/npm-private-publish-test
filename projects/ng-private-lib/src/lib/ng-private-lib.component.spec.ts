import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPrivateLibComponent } from './ng-private-lib.component';

describe('NgPrivateLibComponent', () => {
  let component: NgPrivateLibComponent;
  let fixture: ComponentFixture<NgPrivateLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgPrivateLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPrivateLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
