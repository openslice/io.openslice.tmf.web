import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteResourceCatalogComponent } from './delete-resource-catalog.component';

describe('DeleteResourceCatalogComponent', () => {
  let component: DeleteResourceCatalogComponent;
  let fixture: ComponentFixture<DeleteResourceCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteResourceCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteResourceCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
