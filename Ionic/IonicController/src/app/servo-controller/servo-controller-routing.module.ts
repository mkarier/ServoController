import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServoControllerPage } from './servo-controller.page';

const routes: Routes = [
  {
    path: '',
    component: ServoControllerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServoControllerPageRoutingModule {}
