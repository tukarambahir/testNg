import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PgService } from '../pg.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pglist',
  templateUrl: './pglist.component.html',
  styleUrls: ['./pglist.component.css']
})
export class PgListComponent implements OnInit {

  pgdetails = []
  
  UserId = ''

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private pgService: PgService) { }

  ngOnInit(): void {
    this.loadPg()
  }

book(pg){

  this.router.navigate(['/home/booking/add-booking'], {queryParams: {PgId: pg['PgId']}})
  // this.router.navigate(['/product-add'], {queryParams: {id: product['id']}})
  console.log(this.router.navigate(['/home/booking/add-booking'], {queryParams: {PgId: pg['PgId']}}))

}


  loadPg() {
    this.pgService

      .getpg()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.toastr.info('PG List')

          this.pgdetails = response['data']
          console.log(this.pgdetails)
        } else {
          console.log(response['error'])
        }
      })
  }

  
}