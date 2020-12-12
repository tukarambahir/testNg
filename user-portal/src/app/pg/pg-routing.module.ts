import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PgListComponent } from './pglist/pglist.component';


const routes: Routes = [
  { path: 'pglist', component: PgListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PgRoutingModule { }
