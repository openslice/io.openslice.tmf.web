import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResourceCategoriesComponent } from './list-resource-categories.component';

describe('ListResourceCategoriesComponent', () => {
  let component: ListResourceCategoriesComponent;
  let fixture: ComponentFixture<ListResourceCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListResourceCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListResourceCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
