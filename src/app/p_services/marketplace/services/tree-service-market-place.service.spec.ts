import { TestBed } from '@angular/core/testing';

import { TreeServiceMarketPlaceService } from './tree-service-market-place.service';

describe('TreeServiceMarketPlaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TreeServiceMarketPlaceService = TestBed.get(TreeServiceMarketPlaceService);
    expect(service).toBeTruthy();
  });
});
