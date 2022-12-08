import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'servo-ble',
    loadChildren: () => import('./servo-ble/servo-ble.module').then( m => m.ServoBlePageModule)
  },
  {
    path: 'servo-controller',
    loadChildren: () => import('./servo-controller/servo-controller.module').then( m => m.ServoControllerPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
