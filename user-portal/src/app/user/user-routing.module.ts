import { AddressListComponent } from './address-list/address-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AddressAddComponent } from './address-add/address-add.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UploadImageComponent } from './upload-image/upload-image.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'address-add', component: AddressAddComponent },
  { path: 'upload-image', component: UploadImageComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
