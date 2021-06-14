import { TestBed } from '@angular/core/testing';

import { SwiftapiService } from './swiftapi.service';

describe('SwiftapiService', () => {
  let service: SwiftapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwiftapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
