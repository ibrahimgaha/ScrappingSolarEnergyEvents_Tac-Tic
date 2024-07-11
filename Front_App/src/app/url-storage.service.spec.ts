import { TestBed } from '@angular/core/testing';

import { UrlStorageService } from './url-storage.service';

describe('UrlStorageService', () => {
  let service: UrlStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
