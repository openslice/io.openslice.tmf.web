import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResourceCatalogsComponent } from './edit-resource-catalogs.component';

describe('EditResourceCatalogsComponent', () => {
  let component: EditResourceCatalogsComponent;
  let fixture: ComponentFixture<EditResourceCatalogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditResourceCatalogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditResourceCatalogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
