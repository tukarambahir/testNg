import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']

})
export class SignupComponent implements OnInit {

  Name = ''
  Email = ''
  Password =''
  Phone = ''
  // class attribute
  httpClient: HttpClient

  constructor(httpClient: HttpClient,private toastr:ToastrService) {
  
    this.httpClient = httpClient
  }

  ngOnInit(): void {
  }

  onSignup() {
    {
    console.log(`Name = ${this.Name}`)
    console.log(`Email = ${this.Email}`)
    console.log(`Password = ${this.Password}`)
    console.log(`Phone = ${this.Phone}`)
    }
    // console.log(`Gender = ${this.Gender}`)
    // console.log(`DOB = ${this.DOB}`)
    // console.log(`Address = ${this.Address}`)
    

    const body = {
      Name : this.Name,
      Email: this.Email,
      Password: this.Password,
      Phone : this.Phone,
      // Gender :this.Gender,
      // DOB : this.DOB,
      // Address : this.Address
    }

  
    const url = 'http://localhost:3000/user/signup'
    const request = this.httpClient.post(url, body)
    request.subscribe(response => {
      console.log(response)
      if(this.Email.length==0){
        this.toastr.warning('Please Enter Email')
      }
      else if(this.Password.length==0){
        this.toastr.warning('Please Enter Password')
      }
      else if (response['status'] == 'success') {
        const data = response['data']
        const Name = data['Name']
        this.toastr.success(`Registration for ${Name} Successful`)
      } else {
        this.toastr.error('invalid email or password')
      }
    })
  }


  home(){

    this.toastr.error('Signin first')
  
  }

  onCancel() {

  }
}
