import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateResourceCategoryChildrenComponent } from './create-resource-category-children.component';

describe('CreateResourceCategoryChildrenComponent', () => {
  let component: CreateResourceCategoryChildrenComponent;
  let fixture: ComponentFixture<CreateResourceCategoryChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateResourceCategoryChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateResourceCategoryChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
