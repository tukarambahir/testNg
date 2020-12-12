import { AuthService } from './auth/auth.service';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // default route
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { 
    path: 'home',
    component: HomeComponent, 
    canActivate: [AuthService],
    children: [
      { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule ) },

      { path: 'pg', loadChildren: () => import('./pg/pg.module').then(m => m.PgModule ) },
    
      { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) },

      { path: 'h', loadChildren: () => import('./h/h.module').then(m => m.HModule) }


    ]
  },
  
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
