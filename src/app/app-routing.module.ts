import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PortalsComponent } from './landing/portals/portals.component';
// import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';


const routes: Routes = [
  
  { path: '', component: LandingComponent},
  
  { path: 'services', component: PortalsComponent},
  { path: 'services', loadChildren: () => import('./app-services.module').then(m => m.AppServicesModule)},

  // { path: 'testing', component: BootstrapComponent, children: [
  //   { path: '', component: PortalsComponent}
  // ] },
  
  { path: '**', redirectTo: '/'},
  // { path: '**', redirectTo: '404'},
  // { path: '404', component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
