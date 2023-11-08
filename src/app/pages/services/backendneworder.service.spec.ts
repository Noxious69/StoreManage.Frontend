import { TestBed } from '@angular/core/testing';

import { BackendneworderService } from './backendneworder.service';

describe('BackendneworderService', () => {
  let service: BackendneworderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendneworderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
