import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteActionRulesComponent } from './delete-action-rules.component';

describe('DeleteActionRulesComponent', () => {
  let component: DeleteActionRulesComponent;
  let fixture: ComponentFixture<DeleteActionRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteActionRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteActionRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
