import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteServiceSpecComponent } from './delete-service-spec.component';

describe('DeleteServiceSpecComponent', () => {
  let component: DeleteServiceSpecComponent;
  let fixture: ComponentFixture<DeleteServiceSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteServiceSpecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteServiceSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
