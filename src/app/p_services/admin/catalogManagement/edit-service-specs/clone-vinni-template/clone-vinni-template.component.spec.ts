import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneVinniTemplateComponent } from './clone-vinni-template.component';

describe('CloneVinniTemplateComponent', () => {
  let component: CloneVinniTemplateComponent;
  let fixture: ComponentFixture<CloneVinniTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloneVinniTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloneVinniTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
