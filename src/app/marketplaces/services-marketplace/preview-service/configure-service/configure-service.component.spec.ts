import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureServiceComponent } from './configure-service.component';

describe('ConfigureServiceComponent', () => {
  let component: ConfigureServiceComponent;
  let fixture: ComponentFixture<ConfigureServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
