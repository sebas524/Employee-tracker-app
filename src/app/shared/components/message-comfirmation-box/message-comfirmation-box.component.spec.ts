import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageComfirmationBoxComponent } from './message-comfirmation-box.component';

describe('MessageComfirmationBoxComponent', () => {
  let component: MessageComfirmationBoxComponent;
  let fixture: ComponentFixture<MessageComfirmationBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageComfirmationBoxComponent]
    });
    fixture = TestBed.createComponent(MessageComfirmationBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
