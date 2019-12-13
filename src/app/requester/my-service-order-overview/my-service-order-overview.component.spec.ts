import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyServiceOrderOverviewComponent } from './my-service-order-overview.component';

describe('MyServiceOrderOverviewComponent', () => {
  let component: MyServiceOrderOverviewComponent;
  let fixture: ComponentFixture<MyServiceOrderOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyServiceOrderOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyServiceOrderOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
