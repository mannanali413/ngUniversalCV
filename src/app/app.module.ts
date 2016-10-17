import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routing,
         appRoutingProviders }  from './app.routing';

import './rxjs-extensions';

import { HttpClientService } from './shared/services/http-client.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RightStickyComponent } from './header/right-sticky/right-sticky.component';
import { FooterComponent } from './footer/footer.component';
import { MegaMenuComponent } from './header/mega-menu/mega-menu.component';
import { ActiveMenuDirective } from './header/mega-menu/active-menu.directive';
import { CustomRouterDirective } from './shared/custom-router.directive';
import { ViewComponent } from './view/view.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

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
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders, HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
