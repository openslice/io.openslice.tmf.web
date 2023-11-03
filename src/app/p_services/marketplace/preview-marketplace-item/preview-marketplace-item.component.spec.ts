import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewMarketplaceItemComponent } from './preview-marketplace-item.component';

describe('PreviewServiceComponent', () => {
  let component: PreviewMarketplaceItemComponent;
  let fixture: ComponentFixture<PreviewMarketplaceItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewMarketplaceItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewMarketplaceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
