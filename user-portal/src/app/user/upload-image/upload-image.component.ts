import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  selectedFile = null
  
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private UserService: UserService) { }

  ngOnInit(): void {
  }

  onImageSelect(event) {
    this.selectedFile = event.target.files[0]
  }

  onUploadImage() {
    const UserId = this.activatedRoute.snapshot.queryParams['UserId']
    this.UserService
      .uploadImage(UserId, this.selectedFile)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.router.navigate(['/home/user/profile'])
        } else {
          console.log(response['error'])
        }
      })
  }

  

}
