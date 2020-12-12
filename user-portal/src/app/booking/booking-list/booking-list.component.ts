import { BookingService } from './../booking.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
   bookings :any = []
   booking:any=[]
   ConfirmationStatus = 'yes'
   UserId= sessionStorage['UserId']
  constructor(private bookingService:BookingService,private toastrService:ToastrService,private Router:Router) { }

  ngOnInit(): void {
  this.onLoad(this.UserId)
  }

  
  onDelete(booking) {
    if(confirm('Do you want to cancle Booking ..?')
    ){

      this.bookingService
      .deleteBooking(booking['BookingId'])
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.toastrService.success('deleted booking')
          // this.loadBooking()
          this.onLoad(this.UserId)
          
        }
      })
    }
    else{

        this.toastrService.error('Booking not canceled')
    }
    
  }
  
onConfirm(){

  this.Router.navigate(['/home/booking/transaction'])
}


  onLoad(UserId){
   this.bookingService.onLoad(UserId)
   .subscribe(response=>{
     console.log(response)
     this.bookings =response['data']
     this.toastrService.info('Booking List Loaded')

   })
  }

  // toggleActiveStatus(booking) {
  //   this.bookingService
  //     .toggleActivateStatus(booking)
  //     .subscribe(response => {
  //       if (response['status'] == 'success') {
  //         this.onLoad(this.UserId)
  //       } else {
  //         console.log(response['error'])
  //       }
  //     })
  // }

}
