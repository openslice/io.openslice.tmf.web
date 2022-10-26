import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteResourceSpecAttachmentComponent } from './delete-resource-spec-attachment.component';

describe('DeleteResourceSpecAttachmentComponent', () => {
  let component: DeleteResourceSpecAttachmentComponent;
  let fixture: ComponentFixture<DeleteResourceSpecAttachmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteResourceSpecAttachmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteResourceSpecAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
