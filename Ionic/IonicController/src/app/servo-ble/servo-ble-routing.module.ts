import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServoBlePage } from './servo-ble.page';

const routes: Routes = [
  {
    path: '',
    component: ServoBlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServoBlePageRoutingModule {}
