import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTestSpecCharacteristicComponent } from './edit-test-spec-characteristic.component';

describe('EditTestSpecCharacteristicComponent', () => {
  let component: EditTestSpecCharacteristicComponent;
  let fixture: ComponentFixture<EditTestSpecCharacteristicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTestSpecCharacteristicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTestSpecCharacteristicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
