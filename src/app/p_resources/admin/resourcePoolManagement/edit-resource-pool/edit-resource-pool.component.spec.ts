import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResourcePoolComponent } from './edit-resource-pool.component';

describe('EditServiceCatalogsComponent', () => {
  let component: EditResourcePoolComponent;
  let fixture: ComponentFixture<EditResourcePoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditResourcePoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditResourcePoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
