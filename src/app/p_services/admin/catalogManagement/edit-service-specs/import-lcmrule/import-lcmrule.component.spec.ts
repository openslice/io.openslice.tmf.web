import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportLcmruleComponent } from './import-lcmrule.component';

describe('ImportLcmruleComponent', () => {
  let component: ImportLcmruleComponent;
  let fixture: ComponentFixture<ImportLcmruleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportLcmruleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportLcmruleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
