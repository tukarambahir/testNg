import { PgService } from '../../pg/pg.service';
import { BookingService } from './../booking.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';



@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {
  booking=[]
  UserId=sessionStorage['UserId']
  // PgId=2
  Pgdetails =[]
  PgName=''
  CheckInDate=''
  CheckOutDate=''
  ConfirmationStatus ='yes'
 
  
  constructor(private bookingService:BookingService,private pgdetailsService:PgService,private toastr : ToastrService,   
     private activatedRoute: ActivatedRoute,private Router:Router
    ) { }

  ngOnInit(): void {
    this.LoadPgList()
  }

  LoadPgList(){
    const PgId = this.activatedRoute.snapshot.queryParams['PgId']

    this.pgdetailsService.LoadPgList(PgId).subscribe(response=>{
      console.log(response)
      if(response['status']="success")
      {
        this.Pgdetails=response['data']
        this.booking['PgName']=this.Pgdetails[0]['PgName']
        this.booking['PgId']= this.Pgdetails[0]['PgId']
      
      }
    })
  }

  
  newbooking(UserId,booking){


    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     token: sessionStorage['token']
    //   })
    // };
    //  this.booking.push('ConfirmationStatus')='yes'
    this.bookingService.newbooking(UserId,booking).subscribe(response=>{
     console.log(response)
      this.toastr.success('Booking Added')
      this.Router.navigate(['/home/booking/booking-list'])

    })

  }

  onCancel(){
    this.Router.navigate(['/home/pg/pglist'])
  }
}
 