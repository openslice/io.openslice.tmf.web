import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTestSpecAttachmentComponent } from './delete-test-spec-attachment.component';

describe('DeleteTestSpecAttachmentComponent', () => {
  let component: DeleteTestSpecAttachmentComponent;
  let fixture: ComponentFixture<DeleteTestSpecAttachmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTestSpecAttachmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTestSpecAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
