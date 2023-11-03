import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActionRulesComponent } from './list-action-rules.component';

describe('ListActionRulesComponent', () => {
  let component: ListActionRulesComponent;
  let fixture: ComponentFixture<ListActionRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListActionRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListActionRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
