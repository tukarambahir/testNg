
import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import {UserService} from '../user.service'

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {


   Name = ''
   Email = ''
   Phone = ''
   Gender = ''
   DOB = ''
   Address = ''
  User_data : any =[]
 
  // class attribute
  httpClient: HttpClient

  constructor(httpClient: HttpClient,private toastr:ToastrService,private router:Router,private UserService : UserService,
    private activatedRoute : ActivatedRoute) {
  
    this.httpClient = httpClient
  }

  ngOnInit(): void {
    const UserId = this.activatedRoute.snapshot.queryParams['UserId']
    if (UserId) {
      // edit product
      this.UserService
        .getuser(UserId)
        .subscribe(response => {
          if (response['status'] == 'success') {
            const Users = response['data']
            if (Users.length > 0) {
              this.User_data = Users[0]
              this.Name = this.User_data['Name']
              this.Phone = this.User_data['Phone']
              this.Email = this.User_data['Email']
              this.DOB = this.User_data['DOB']
              this.Gender = this.User_data['Gender']
              this.Address = this.User_data['Address']
            }
          }
        })
    }

    
  }


  Cancel(){
    this.router.navigate(['/home/user/profile'], )
  }
  
    // loadUser(UserId) {
    //   this.UserService
    //     .getuser(UserId)
    //     .subscribe(response=>{
    //      console.log(response)
    //      this.User_data =response['data']
    //      this.User_data['UserId']=this.User_data[0].UserId
    //      this.User_data['Name']=this.User_data[0].Name
    //      this.User_data['Email']=this.User_data[0].Email
    //      this.User_data['Phone']=this.User_data[0].Phone
    //      this.User_data['DOB']=this.User_data[0].DOB
    //      this.User_data['Address']=this.User_data[0].Address
    //      this.User_data['Gender']=this.User_data[0].Gender
 
       
    //    })
    //   }


      onUpdate() {

        if (this.User_data) {
          // edit
          this.UserService
            .updateProfile(this.User_data['UserId'], this.Name, this.Email, this.DOB, this.Phone, this.Gender,this.Address)
            .subscribe(response => {
              if (response['status'] == 'success') {
                console.log(this.User_data)
                this.toastr.success('Profile updated')
                this.router.navigate(['/home/user/profile'])

              }
            })
        } else {
          // insert
          this.UserService
            .insertProfile(this.Name, this.Email, this.DOB, this.Phone, this.Gender,this.Address)
            .subscribe(response => {
              if (response['status'] == 'success') {
                this.router.navigate(['/home/user/profile'])
              }
            })
        }
    
      }
    }
  

