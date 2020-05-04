import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPartyCharacteristicsComponent } from './edit-party-characteristics.component';

describe('EditPartyCharacteristicsComponent', () => {
  let component: EditPartyCharacteristicsComponent;
  let fixture: ComponentFixture<EditPartyCharacteristicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPartyCharacteristicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPartyCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
