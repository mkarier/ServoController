import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServoControllerPageRoutingModule } from './servo-controller-routing.module';

import { ServoControllerPage } from './servo-controller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServoControllerPageRoutingModule
  ],
  declarations: [ServoControllerPage]
})
export class ServoControllerPageModule {}
