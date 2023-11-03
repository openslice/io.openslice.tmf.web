import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResourcePoolsComponent } from './list-resource-pools.component';

describe('ListResourcePoolsComponent', () => {
  let component: ListResourcePoolsComponent;
  let fixture: ComponentFixture<ListResourcePoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListResourcePoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListResourcePoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
