import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLcmruleComponent } from './delete-lcmrule.component';

describe('DeleteLcmruleComponent', () => {
  let component: DeleteLcmruleComponent;
  let fixture: ComponentFixture<DeleteLcmruleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteLcmruleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLcmruleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
