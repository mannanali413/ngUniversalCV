import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal/browser'; // for AoT we need to manually split universal packages

import { routing,
         appRoutingProviders }  from './app/app.routing';

import './app/rxjs-extensions';

import { HttpClientService } from './app/shared/services/http-client.service';

import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header/header.component';
import { RightStickyComponent } from './app/header/right-sticky/right-sticky.component';
import { FooterComponent } from './app/footer/footer.component';
import { MegaMenuComponent } from './app/header/mega-menu/mega-menu.component';
import { ActiveMenuDirective } from './app/header/mega-menu/active-menu.directive';
import { CustomRouterDirective } from './app/shared/custom-router.directive';
import { ViewComponent } from './app/view/view.component';
import { ProductComponent } from './app/product/product.component';
import { NotFoundComponent } from './app/shared/not-found/not-found.component';


@NgModule({
  declarations: [
    CustomRouterDirective,
    AppComponent,
    HeaderComponent,
    RightStickyComponent,
    MegaMenuComponent,
    ActiveMenuDirective,
    FooterComponent,
    ViewComponent,
    ProductComponent,
    NotFoundComponent
  ],
  bootstrap: [ AppComponent ],
  imports: [
    UniversalModule, // BrowserModule, HttpModule, and JsonpModule are included
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders, HttpClientService],
})
export class MainModule {

}
