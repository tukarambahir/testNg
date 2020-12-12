import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  url ='http://localhost:3000/booking'
  constructor(private httpClient:HttpClient) { }

  onLoad(UserId){
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };
   return this.httpClient.get(this.url+'/history/'+ UserId,httpOptions)
  }
 


  
  // cancel(booking) {
  //   // add the token in the request header
  //   // const httpOptions = {
  //   //   headers: new httpHeaders({
  //   //     token: sessionStorage['token']
  //   //   })
  //   // };
    
  //   const body = {}
  //   return this.httpClient.put(this.url + `/${booking['BookingId']}`, body)
  // }

  
  deleteBooking(id) {
    // add the token in the request header
  //   const httpOptions = {
  //    headers: new HttpHeaders({
  //      token: sessionStorage['token']
  //    })
  //  };
  const httpOptions = {
    headers: new HttpHeaders({
      token: sessionStorage['token']
    })
  };
   return this.httpClient.delete(this.url + "/" + id,httpOptions)
 }


  newbooking(UserId,booking){    

    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };
  console.log(booking['ConfirmationStatus'])
  const body ={
      UserId : UserId,
      PgId: booking['PgId'],
      ConfirmationStatus:booking['ConfirmationStatus'],
      RoomType : booking['RoomType'],
      CheckInDate :booking['CheckInDate'],
      CheckOutDate :booking['CheckOutDate']
      
  }
  return this.httpClient.post(this.url+'/new',body,httpOptions)
  }

  toggleActivateStatus(booking) {
    // add the token in the request header
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };
    
    const body = {}
    return this.httpClient.put(this.url + `/update-state/${booking['BookingId']}/${booking['ConfirmationStatus'] == 'No' ? 'yes' : 'No'}`, body, httpOptions)
  }

}
