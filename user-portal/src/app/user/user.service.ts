import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000/user'

  constructor(
    private httpClient: HttpClient) { }
  
  

   getuser(UserId) {
    // add the token in the request header
    const httpOptions = {
     headers: new HttpHeaders({
       token: sessionStorage['token']
     })
   };
   
   return this.httpClient.get(this.url + '/profile/'+ UserId, httpOptions)
 }


 updateProfile(UserId, Name: string, Email: string, DOB: string, Phone: string,Gender:string,Address:string) {
  // add the token in the request header
  const httpOptions = {
   headers: new HttpHeaders({
     token: sessionStorage['token']
   })
 };

 const body = {
   Name: Name,
   Email: Email,
   DOB:DOB,
   Phone: Phone,
   Gender: Gender,
   Address: Address
   
 }
 
 return this.httpClient.put(this.url + "/" + UserId, body, httpOptions)
}

insertProfile(Name: string, Email: string, DOB: string, Phone: string,Gender:string,Address:string) {
  // add the token in the request header
  const httpOptions = {
   headers: new HttpHeaders({
     token: sessionStorage['token']
   })
 };
 const body = {
   Name: Name,
   Email: Email,
   DOB:DOB,
   Phone: Phone,
   Gender: Gender,
   Address: Address
}
 
 return this.httpClient.post(this.url + "/create", body, httpOptions)
}


uploadImage(UserId, file) {
  // add the token in the request header
  const httpOptions = {
    headers: new HttpHeaders({
      token: sessionStorage['token']
    })
  };

  const body = new FormData()
  body.append('userImage', file)

  return this.httpClient.post(this.url + `/upload-image/${UserId}`, body, httpOptions)
}
}
