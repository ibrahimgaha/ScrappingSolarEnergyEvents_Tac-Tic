import { TestBed } from '@angular/core/testing';

import { BackAppService } from './back-app.service';

describe('BackAppService', () => {
  let service: BackAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
