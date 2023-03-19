import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageServiceTestSpecAttachmentsComponent } from './manage-service-test-spec-attachments.component';

describe('ManageServiceTestSpecAttachmentsComponent', () => {
  let component: ManageServiceTestSpecAttachmentsComponent;
  let fixture: ComponentFixture<ManageServiceTestSpecAttachmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageServiceTestSpecAttachmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageServiceTestSpecAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
