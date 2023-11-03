import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportCharacteristicsFromYamlComponent } from './import-characteristics-from-yaml.component';

describe('ImportCharacteristicsFromYamlComponent', () => {
  let component: ImportCharacteristicsFromYamlComponent;
  let fixture: ComponentFixture<ImportCharacteristicsFromYamlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportCharacteristicsFromYamlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportCharacteristicsFromYamlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
