import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewMarketPlaceItemComponent } from './preview-market-place-item.component';

describe('PreviewMarketPlaceItemComponent', () => {
  let component: PreviewMarketPlaceItemComponent;
  let fixture: ComponentFixture<PreviewMarketPlaceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewMarketPlaceItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewMarketPlaceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
