import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteIndividualComponent } from './delete-individual.component';

describe('DeleteIndividualComponent', () => {
  let component: DeleteIndividualComponent;
  let fixture: ComponentFixture<DeleteIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
