import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { PortalsComponent } from './landing/portals/portals.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { RedirectComponent } from './shared/components/redirect/redirect.component';


const routes: Routes = [

  { path: '', component: LandingComponent},

  { path: 'redirect', component: RedirectComponent},

  { path: 'services', component: PortalsComponent},
  { path: 'services', loadChildren: () => import('./app-services.module').then(m => m.AppServicesModule)},

  { path: 'resources', component: PortalsComponent},
  { path: 'resources', loadChildren: () => import('./app-resources.module').then(m => m.AppResourcesModule)},

  { path: 'testing', component: PortalsComponent},
  { path: 'testing', loadChildren: () => import('./app-testing.module').then(m => m.AppTestingModule)},

  { path: 'products', component: PortalsComponent},
  { path: 'products', loadChildren: () => import('./app-products.module').then(m => m.AppProductsModule)},

  { path: '**', redirectTo: '404'},
  { path: '404', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
