import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewServiceOrderComponent } from './preview-service-order.component';

describe('PreviewServiceOrderComponent', () => {
  let component: PreviewServiceOrderComponent;
  let fixture: ComponentFixture<PreviewServiceOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewServiceOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewServiceOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
