import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportNsdDialogComponent } from './import-nsd-dialog.component';

describe('ImportNsdDialogComponent', () => {
  let component: ImportNsdDialogComponent;
  let fixture: ComponentFixture<ImportNsdDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportNsdDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportNsdDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
