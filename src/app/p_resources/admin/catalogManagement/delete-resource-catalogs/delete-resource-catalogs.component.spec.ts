import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteResourceCatalogsComponent } from './delete-resource-catalogs.component';

describe('DeleteResourceCatalogsComponent', () => {
  let component: DeleteResourceCatalogsComponent;
  let fixture: ComponentFixture<DeleteResourceCatalogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteResourceCatalogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteResourceCatalogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
