import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteServiceTestSpecComponent } from './delete-service-test-spec.component';

describe('DeleteServiceTestSpecComponent', () => {
  let component: DeleteServiceTestSpecComponent;
  let fixture: ComponentFixture<DeleteServiceTestSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteServiceTestSpecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteServiceTestSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
