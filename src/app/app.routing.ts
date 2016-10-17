import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

export const appRoutes: Routes = [
  { path: 'catalog/product/view',  children: [
      { path: ':id', component: ProductComponent, pathMatch: 'full'},
      { path: '', component: NotFoundComponent, pathMatch: 'full'}
    ]
  },
  { path: ':category', children: [
      { path: '', component: ViewComponent, pathMatch: 'full'},
      { path: ':sub_category', component: ViewComponent, pathMatch: 'full'} ,
      { path: ':sub_category/:sub_sub_category', component: ViewComponent, pathMatch: 'full'},
    ]
  },
  { path: '', component: ViewComponent , pathMatch: 'full'},
  { path: '404', component: NotFoundComponent, pathMatch: 'full'},
  { path: '**', component: NotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
