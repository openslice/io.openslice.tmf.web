import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteResourceSpecCharacteristicsComponent } from './delete-resource-spec-characteristics.component';

describe('DeleteResourceSpecCharacteristicsComponent', () => {
  let component: DeleteResourceSpecCharacteristicsComponent;
  let fixture: ComponentFixture<DeleteResourceSpecCharacteristicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteResourceSpecCharacteristicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteResourceSpecCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
