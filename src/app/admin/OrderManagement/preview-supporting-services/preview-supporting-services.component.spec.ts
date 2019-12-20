import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewSupportingServicesComponent } from './preview-supporting-services.component';

describe('PreviewSupportingServicesComponent', () => {
  let component: PreviewSupportingServicesComponent;
  let fixture: ComponentFixture<PreviewSupportingServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewSupportingServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewSupportingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
