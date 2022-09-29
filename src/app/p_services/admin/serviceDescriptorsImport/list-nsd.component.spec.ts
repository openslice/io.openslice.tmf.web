import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNsdComponent } from './list-nsd.component';

describe('ListNsdComponent', () => {
  let component: ListNsdComponent;
  let fixture: ComponentFixture<ListNsdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNsdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
