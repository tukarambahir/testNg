import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingListComponent } from './booking-list/booking-list.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { TransactionComponent } from './transaction/transaction.component';



const routes: Routes = [
  { path:'booking-list',component: BookingListComponent},
  { path:'add-booking' , component: AddBookingComponent},
  { path:'transaction' , component: TransactionComponent},

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
