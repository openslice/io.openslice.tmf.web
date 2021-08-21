import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRuleDesignComponent } from './service-rule-design.component';

describe('ServiceRuleDesignComponent', () => {
  let component: ServiceRuleDesignComponent;
  let fixture: ComponentFixture<ServiceRuleDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceRuleDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceRuleDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
