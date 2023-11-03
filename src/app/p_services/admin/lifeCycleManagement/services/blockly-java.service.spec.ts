import { TestBed } from '@angular/core/testing';

import { BlocklyJavaService } from './blockly-java.service';

describe('BlocklyJavaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlocklyJavaService = TestBed.get(BlocklyJavaService);
    expect(service).toBeTruthy();
  });
});
