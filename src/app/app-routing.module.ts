import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstPageComponent} from './first-page/first-page.component';
import {AddressResolver} from './address.resolver';

const routes: Routes = [
  { path: 'first', component: FirstPageComponent, resolve: {
     addresses: AddressResolver
    } },
  { path: '',   redirectTo: 'first', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
