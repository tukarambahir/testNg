import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from '../user.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  User_data:any = [];
  UserId= sessionStorage['UserId']

  constructor(
    

    private toastr: ToastrService,
    private router: Router,
    private userService: UserService) {}

  ngOnInit(): void {

    this.loadUser(this.UserId)
  }

    loadUser(UserId) {
     this.userService
       .getuser(UserId)
       .subscribe(response=>{
        console.log(response)
        this.User_data =response['data']
        this.User_data['UserId']=this.User_data[0].UserId
        this.User_data['Name']=this.User_data[0].Name
        this.User_data['Email']=this.User_data[0].Email
        this.User_data['Phone']=this.User_data[0].Phone
        this.User_data['DOB']=this.User_data[0].DOB
        this.User_data['Address']=this.User_data[0].Address
        this.User_data['Gender']=this.User_data[0].Gender
        this.User_data['image']=this.User_data[0].image

      this.toastr.success('Profile Loaded')
      })
     }
   

     edit(User_data){

      this.router.navigate(['/home/user/edit-profile'], {queryParams: {UserId: User_data['UserId']}})
      // this.router.navigate(['/product-add'], {queryParams: {id: product['id']}})
      // console.log(this.router.navigate(['/home/booking/add-booking'], {queryParams: {PgId: pg['PgId']}}))
    
    }
    uploadImage(User_data) {
      this.router.navigate(['/home/user/upload-image'], {queryParams: {UserId: User_data['UserId']}})
    }
   }
   



  

  
// }
//   loadUser() {
//     this.userService
//       .getuser()
//       .subscribe(response => {
//         if (response['status'] == 'success') {
//           this.toastr.info('Profile')

//           this.User_data = response['data']
//           console.log(this.User_data)
//         } else {
//           console.log(response['error'])
//         }
//       })
//   }
// }
