import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTestSpecCharacteristicComponent } from './delete-test-spec-characteristic.component';

describe('DeleteTestSpecCharacteristicComponent', () => {
  let component: DeleteTestSpecCharacteristicComponent;
  let fixture: ComponentFixture<DeleteTestSpecCharacteristicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTestSpecCharacteristicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTestSpecCharacteristicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
