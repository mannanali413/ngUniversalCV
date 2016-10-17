import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'
import { CustomRouterDirective } from './shared/custom-router.directive';

import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.scss','./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {}
