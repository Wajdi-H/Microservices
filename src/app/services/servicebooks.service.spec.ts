import { TestBed } from '@angular/core/testing';

import { ServicebooksService } from './servicebooks.service';

describe('ServicebooksService', () => {
  let service: ServicebooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicebooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
