import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServiceSpecCharacteristicsComponent } from './edit-service-spec-characteristics.component';

describe('EditServiceSpecCharacteristicsComponent', () => {
  let component: EditServiceSpecCharacteristicsComponent;
  let fixture: ComponentFixture<EditServiceSpecCharacteristicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditServiceSpecCharacteristicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServiceSpecCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
