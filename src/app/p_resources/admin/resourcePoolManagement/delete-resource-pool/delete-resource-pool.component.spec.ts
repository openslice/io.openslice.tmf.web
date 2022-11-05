import { DeleteResourcePoolComponent } from './delete-resource-pool.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('DeleteServiceCatalogComponent', () => {
  let component: DeleteResourcePoolComponent;
  let fixture: ComponentFixture<DeleteResourcePoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteResourcePoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteResourcePoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
