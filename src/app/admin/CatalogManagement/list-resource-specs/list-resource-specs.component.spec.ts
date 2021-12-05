import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResourceSpecsComponent } from './list-resource-specs.component';

describe('ListResourceSpecsComponent', () => {
  let component: ListResourceSpecsComponent;
  let fixture: ComponentFixture<ListResourceSpecsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListResourceSpecsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListResourceSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
