import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResourceSpecCharacteristicsComponent } from './edit-resource-spec-characteristics.component';

describe('EditResourceSpecCharacteristicsComponent', () => {
  let component: EditResourceSpecCharacteristicsComponent;
  let fixture: ComponentFixture<EditResourceSpecCharacteristicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditResourceSpecCharacteristicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditResourceSpecCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
