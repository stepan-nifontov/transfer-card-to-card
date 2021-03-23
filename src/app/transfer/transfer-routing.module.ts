import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransferHistoryComponent } from './transfer-history/transfer-history.component';
import { TransferLayoutComponent } from './transfer-layout/transfer-layout.component';
import { TransferPaymentComponent } from './transfer-payment/transfer-payment.component';


const routes: Routes = [
  { path: '', component: TransferLayoutComponent,
    children: [
      {path: 'payment', component: TransferPaymentComponent},
      {path: 'history', component: TransferHistoryComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferRoutingModule { }
