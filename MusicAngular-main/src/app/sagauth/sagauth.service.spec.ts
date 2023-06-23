import { TestBed } from '@angular/core/testing';

import { SagauthService } from './sagauth.service';

describe('SagauthService', () => {
  let service: SagauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SagauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
