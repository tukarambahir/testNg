import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressAddComponent } from './address-add/address-add.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FormsModule } from '@angular/forms';
import { UploadImageComponent } from './upload-image/upload-image.component';

@NgModule({
  declarations: [ProfileComponent, AddressListComponent, AddressAddComponent, EditProfileComponent, UploadImageComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
