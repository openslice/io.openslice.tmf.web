import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteServiceSpecCharacteristicsComponent } from './delete-service-spec-characteristics.component';

describe('DeleteServiceSpecCharacteristicsComponent', () => {
  let component: DeleteServiceSpecCharacteristicsComponent;
  let fixture: ComponentFixture<DeleteServiceSpecCharacteristicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteServiceSpecCharacteristicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteServiceSpecCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
