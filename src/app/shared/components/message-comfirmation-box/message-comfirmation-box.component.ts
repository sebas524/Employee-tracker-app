import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-message-comfirmation-box',
  templateUrl: './message-comfirmation-box.component.html',
  styleUrls: ['./message-comfirmation-box.component.css'],
})
export class MessageComfirmationBoxComponent {
  message: string;
  btn: string = 'accept';

  constructor(
    public dialogRef: MatDialogRef<MessageComfirmationBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.message = data.message;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
