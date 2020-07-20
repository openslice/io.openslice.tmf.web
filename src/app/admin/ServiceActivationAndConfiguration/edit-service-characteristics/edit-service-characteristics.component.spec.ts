import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServiceCharacteristicsComponent } from './edit-service-characteristics.component';

describe('EditServiceCharacteristicsComponent', () => {
  let component: EditServiceCharacteristicsComponent;
  let fixture: ComponentFixture<EditServiceCharacteristicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditServiceCharacteristicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServiceCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
