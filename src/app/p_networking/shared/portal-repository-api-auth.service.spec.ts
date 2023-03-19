import { TestBed } from '@angular/core/testing';

import { PortalRepositoryAPIAuthService } from './portal-repository-api-auth.service';

describe('PortalRepositoryAPIAuthService', () => {
  let service: PortalRepositoryAPIAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortalRepositoryAPIAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
