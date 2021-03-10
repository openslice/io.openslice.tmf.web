import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActionsSpecsComponent } from './list-actions-specs.component';

describe('ListActionsComponent', () => {
  let component: ListActionsSpecsComponent;
  let fixture: ComponentFixture<ListActionsSpecsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListActionsSpecsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListActionsSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
