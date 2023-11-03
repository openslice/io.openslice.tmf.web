import { TestBed } from '@angular/core/testing';

import { SharedAlarmService } from './shared-alarm.service';

describe('SharedAlarmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedAlarmService = TestBed.get(SharedAlarmService);
    expect(service).toBeTruthy();
  });
});
