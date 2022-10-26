import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteResourceSpecComponent } from './delete-resource-spec.component';

describe('DeleteResourceSpecComponent', () => {
  let component: DeleteResourceSpecComponent;
  let fixture: ComponentFixture<DeleteResourceSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteResourceSpecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteResourceSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
