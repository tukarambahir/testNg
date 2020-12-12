import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PgRoutingModule } from './pg-routing.module';
import { PgListComponent } from './pglist/pglist.component';
// import { DemoMaterialModule } from '../material.module';


@NgModule({
  declarations: [PgListComponent],
  imports: [
    CommonModule,
    PgRoutingModule,
    // DemoMaterialModule
    
  ]
})
export class PgModule { }
