import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAlarmComponent } from './delete-alarm.component';

describe('DeleteAlarmComponent', () => {
  let component: DeleteAlarmComponent;
  let fixture: ComponentFixture<DeleteAlarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAlarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
