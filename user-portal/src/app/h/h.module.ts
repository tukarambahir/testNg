import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HRoutingModule } from './h-routing.module';
import { HomeComponent } from '../h/home/home.component';
// import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HRoutingModule, 
  ]
})
export class HModule { }
