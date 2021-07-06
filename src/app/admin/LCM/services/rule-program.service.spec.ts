import { TestBed } from '@angular/core/testing';

import { RuleProgramService } from './rule-program.service';

describe('RuleProgramService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RuleProgramService = TestBed.get(RuleProgramService);
    expect(service).toBeTruthy();
  });
});
