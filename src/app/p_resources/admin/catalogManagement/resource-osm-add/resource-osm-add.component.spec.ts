import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceOsmAddComponent } from './resource-osm-add.component';

describe('ResourceOsmAddComponent', () => {
  let component: ResourceOsmAddComponent;
  let fixture: ComponentFixture<ResourceOsmAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceOsmAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceOsmAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
