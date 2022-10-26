import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewResourceComponent } from './preview-resource.component';

describe('PreviewResourceComponent', () => {
  let component: PreviewResourceComponent;
  let fixture: ComponentFixture<PreviewResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
