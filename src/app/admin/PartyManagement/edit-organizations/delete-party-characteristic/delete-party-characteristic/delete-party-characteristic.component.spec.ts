import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePartyCharacteristicComponent } from './delete-party-characteristic.component';

describe('DeletePartyCharacteristicComponent', () => {
  let component: DeletePartyCharacteristicComponent;
  let fixture: ComponentFixture<DeletePartyCharacteristicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePartyCharacteristicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePartyCharacteristicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
