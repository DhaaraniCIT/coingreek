import { TestBed } from '@angular/core/testing';

import { CoingreeksService } from './coingreeks.service';

describe('CoingreeksService', () => {
  let service: CoingreeksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoingreeksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
