import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResourceInventoryComponent } from './list-resource-inventory.component';

describe('ListResourceInventoryComponent', () => {
  let component: ListResourceInventoryComponent;
  let fixture: ComponentFixture<ListResourceInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListResourceInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListResourceInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
