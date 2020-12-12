import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingListComponent } from '../booking/booking-list/booking-list.component';
import { HomeComponent } from '../h/home/home.component';

const routes: Routes = [

   { path:'home',component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HRoutingModule { }
