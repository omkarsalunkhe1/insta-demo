import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { HaderComponentModule } from '../common/hader/hader.module';
import { HttpServiceService } from '../services/http-service.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    HaderComponentModule,
    HttpClientModule
  ],
  providers: [HttpServiceService],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
