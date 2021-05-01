import { TestBed } from '@angular/core/testing';

import { CacheSearchParametersService } from './cache-search-parameters.service';

describe('CacheSearchParametersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CacheSearchParametersService = TestBed.get(CacheSearchParametersService);
    expect(service).toBeTruthy();
  });
});
