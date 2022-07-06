import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResourceCatalogsComponent } from './list-resource-catalogs.component';

describe('ListResourceCatalogsComponent', () => {
  let component: ListResourceCatalogsComponent;
  let fixture: ComponentFixture<ListResourceCatalogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListResourceCatalogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListResourceCatalogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
