import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServiceTestSpecsComponent } from './list-service-test-specs.component';

describe('ListServiceTestSpecsComponent', () => {
  let component: ListServiceTestSpecsComponent;
  let fixture: ComponentFixture<ListServiceTestSpecsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListServiceTestSpecsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServiceTestSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
