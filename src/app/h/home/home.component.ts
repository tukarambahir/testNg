import { Component, OnInit } from '@angular/core';
import {HService} from '../h.service'
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private HService : HService,private toastr:ToastrService) { }

  ngOnInit(): void {

    this.toastr.success('Home')
  }

}
