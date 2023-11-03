import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServiceCategoryChildrenComponent } from './create-service-category-children.component';

describe('CreateServiceCategoryChildrenComponent', () => {
  let component: CreateServiceCategoryChildrenComponent;
  let fixture: ComponentFixture<CreateServiceCategoryChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateServiceCategoryChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateServiceCategoryChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
