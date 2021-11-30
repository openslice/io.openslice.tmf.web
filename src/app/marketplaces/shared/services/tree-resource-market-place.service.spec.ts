import { TestBed } from '@angular/core/testing';

import { TreeResourceMarketPlaceService } from './tree-resource-market-place.service';

describe('TreeResourceMarketPlaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TreeResourceMarketPlaceService = TestBed.get(TreeResourceMarketPlaceService);
    expect(service).toBeTruthy();
  });
});
