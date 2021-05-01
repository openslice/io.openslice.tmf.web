import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditActionRulesComponent } from './edit-action-rules.component';

describe('EditActionRulesComponent', () => {
  let component: EditActionRulesComponent;
  let fixture: ComponentFixture<EditActionRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditActionRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditActionRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
