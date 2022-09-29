import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServiceSpecsComponent } from './list-service-specs.component';

describe('ListServiceSpecsComponent', () => {
  let component: ListServiceSpecsComponent;
  let fixture: ComponentFixture<ListServiceSpecsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListServiceSpecsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServiceSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
