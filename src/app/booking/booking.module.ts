import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { FormsModule } from '@angular/forms';
import { TransactionComponent } from './transaction/transaction.component';



@NgModule({
  declarations: [AddBookingComponent, BookingListComponent, TransactionComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    FormsModule
    
  ]
})
export class BookingModule { }
