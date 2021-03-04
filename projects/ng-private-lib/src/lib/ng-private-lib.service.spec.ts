import { TestBed } from '@angular/core/testing';

import { NgPrivateLibService } from './ng-private-lib.service';

describe('NgPrivateLibService', () => {
  let service: NgPrivateLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgPrivateLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
