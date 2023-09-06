import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFound404Component } from './pages/page-not-found404/page-not-found404.component';
import { MessageComfirmationBoxComponent } from './components/message-comfirmation-box/message-comfirmation-box.component';

@NgModule({
  declarations: [PageNotFound404Component, MessageComfirmationBoxComponent],
  imports: [CommonModule],
})
export class SharedModule {}
