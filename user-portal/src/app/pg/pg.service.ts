import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PgService {
  url = 'http://localhost:3000/pg'

  constructor(
    private httpClient: HttpClient) { }
  

    LoadPgList(PgId){
      const httpOptions = {
        headers: new HttpHeaders({
          token: sessionStorage['token']
        })
      };
      console.log(this.url + '/' + PgId)
      return this.httpClient.get(this.url + '/' + PgId,httpOptions)
    }


  getpg() {
     // add the token in the request header
     const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };
    
    return this.httpClient.get(this.url, httpOptions)
  }

}
  // getProductDetails(id) {
  //   // add the token in the request header
  //   const httpOptions = {
  //    headers: new HttpHeaders({
  //     //  token: sessionStorage['token']
  //    })
  //  };
   
  //  return this.httpClient.get(this.url + "/details/" + id, httpOptions)
  // }

 
   
