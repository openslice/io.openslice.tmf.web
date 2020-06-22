import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrdersServiceSpecCharacteristicsComponent } from './edit-orders-service-spec-characteristics.component';

describe('EditOrdersServiceSpecCharacteristicsComponent', () => {
  let component: EditOrdersServiceSpecCharacteristicsComponent;
  let fixture: ComponentFixture<EditOrdersServiceSpecCharacteristicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOrdersServiceSpecCharacteristicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOrdersServiceSpecCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
