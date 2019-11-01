import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServiceCatalogsComponent } from './list-service-catalogs.component';

describe('ListServiceCatalogsComponent', () => {
  let component: ListServiceCatalogsComponent;
  let fixture: ComponentFixture<ListServiceCatalogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListServiceCatalogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServiceCatalogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
