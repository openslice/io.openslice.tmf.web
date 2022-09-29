import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServiceTestsComponent } from './list-service-tests.component';

describe('ListServiceTestsComponent', () => {
  let component: ListServiceTestsComponent;
  let fixture: ComponentFixture<ListServiceTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListServiceTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServiceTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
