import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneGstTemplateComponent } from './clone-gst-template.component';

describe('CloneGstTemplateComponent', () => {
  let component: CloneGstTemplateComponent;
  let fixture: ComponentFixture<CloneGstTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloneGstTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloneGstTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
