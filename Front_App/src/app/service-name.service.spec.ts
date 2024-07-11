import { TestBed } from '@angular/core/testing';

import { SurveillerUrlService } from './service-name.service';

describe('SurveillerUrlService', () => {
  let service: SurveillerUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveillerUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
