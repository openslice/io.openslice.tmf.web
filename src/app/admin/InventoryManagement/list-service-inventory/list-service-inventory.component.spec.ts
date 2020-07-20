import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServiceInventoryComponent } from './list-service-inventory.component';

describe('ListServiceInventoryComponent', () => {
  let component: ListServiceInventoryComponent;
  let fixture: ComponentFixture<ListServiceInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListServiceInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServiceInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
