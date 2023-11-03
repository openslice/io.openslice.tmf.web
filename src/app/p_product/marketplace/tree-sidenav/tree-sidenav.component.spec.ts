import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeSidenavComponent } from './tree-sidenav.component';

describe('TreeSidenavComponent', () => {
  let component: TreeSidenavComponent;
  let fixture: ComponentFixture<TreeSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
