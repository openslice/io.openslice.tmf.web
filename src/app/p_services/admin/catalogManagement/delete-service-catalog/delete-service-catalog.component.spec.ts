import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteServiceCatalogComponent } from './delete-service-catalog.component';

describe('DeleteServiceCatalogComponent', () => {
  let component: DeleteServiceCatalogComponent;
  let fixture: ComponentFixture<DeleteServiceCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteServiceCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteServiceCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
