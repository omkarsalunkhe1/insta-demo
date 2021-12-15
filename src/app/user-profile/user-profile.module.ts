import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserProfileRoutingModule } from './user-profile-routing.module';

import { UserProfileComponent } from './user-profile.component';
import { HttpServiceService } from '../services/http-service.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    UserProfileRoutingModule,
    HttpClientModule
  ],
  providers: [HttpServiceService],
  declarations: [UserProfileComponent]
})
export class UserProfileModule {}
