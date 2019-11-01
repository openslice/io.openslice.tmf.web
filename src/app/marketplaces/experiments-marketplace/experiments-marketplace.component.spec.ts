import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentsMarketplaceComponent } from './experiments-marketplace.component';

describe('ExperimentsMarketplaceComponent', () => {
  let component: ExperimentsMarketplaceComponent;
  let fixture: ComponentFixture<ExperimentsMarketplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentsMarketplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentsMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
