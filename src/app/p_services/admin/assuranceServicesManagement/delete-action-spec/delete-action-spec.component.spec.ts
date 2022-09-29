import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteActionSpecComponent } from './delete-action-spec.component';

describe('DeleteActionSpecComponent', () => {
  let component: DeleteActionSpecComponent;
  let fixture: ComponentFixture<DeleteActionSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteActionSpecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteActionSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
