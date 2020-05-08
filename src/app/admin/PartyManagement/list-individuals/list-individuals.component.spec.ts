import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIndividualsComponent } from './list-individuals.component';

describe('ListIndividualsComponent', () => {
  let component: ListIndividualsComponent;
  let fixture: ComponentFixture<ListIndividualsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListIndividualsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIndividualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
