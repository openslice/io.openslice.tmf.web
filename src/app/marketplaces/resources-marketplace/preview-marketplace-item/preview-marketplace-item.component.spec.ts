import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewResourceMarketplaceItemComponent } from './preview-marketplace-item.component';

describe('PreviewServiceComponent', () => {
  let component: PreviewResourceMarketplaceItemComponent;
  let fixture: ComponentFixture<PreviewResourceMarketplaceItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewResourceMarketplaceItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewResourceMarketplaceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
