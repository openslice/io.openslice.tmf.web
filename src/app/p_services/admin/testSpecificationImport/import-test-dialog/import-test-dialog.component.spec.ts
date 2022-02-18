import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportTestDialogComponent } from './import-test-dialog.component';

describe('ImportTestDialogComponent', () => {
  let component: ImportTestDialogComponent;
  let fixture: ComponentFixture<ImportTestDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportTestDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportTestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
