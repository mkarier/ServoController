import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServoBlePageRoutingModule } from './servo-ble-routing.module';

import { ServoBlePage } from './servo-ble.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServoBlePageRoutingModule
  ],
  declarations: [ServoBlePage]
})
export class ServoBlePageModule {}
