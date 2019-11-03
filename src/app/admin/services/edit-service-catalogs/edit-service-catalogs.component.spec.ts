import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServiceCatalogsComponent } from './edit-service-catalogs.component';

describe('EditServiceCatalogsComponent', () => {
  let component: EditServiceCatalogsComponent;
  let fixture: ComponentFixture<EditServiceCatalogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditServiceCatalogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServiceCatalogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
