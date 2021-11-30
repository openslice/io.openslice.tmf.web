import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeSidenavResourcesComponent } from './tree-sidenav-resources.component';

describe('TreeSidenavResourcesComponent', () => {
  let component: TreeSidenavResourcesComponent;
  let fixture: ComponentFixture<TreeSidenavResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeSidenavResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeSidenavResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
