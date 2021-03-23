import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferRoutingModule } from './transfer-routing.module';
import { TransferLayoutComponent } from './transfer-layout/transfer-layout.component';
import { TransferPaymentComponent } from './transfer-payment/transfer-payment.component';
import { TransferHistoryComponent } from './transfer-history/transfer-history.component';


@NgModule({
  declarations: [TransferLayoutComponent, TransferPaymentComponent, TransferHistoryComponent],
  imports: [
    CommonModule,
    TransferRoutingModule
  ]
})
export class TransferModule { }
