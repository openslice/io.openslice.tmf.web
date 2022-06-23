import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteServiceTestComponent } from './delete-service-test.component';

describe('DeleteServiceTestComponent', () => {
  let component: DeleteServiceTestComponent;
  let fixture: ComponentFixture<DeleteServiceTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteServiceTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteServiceTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
