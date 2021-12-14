import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HaderComponent } from './hader.component';


@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [HaderComponent],
  exports: [HaderComponent]
})
export class HaderComponentModule {}
