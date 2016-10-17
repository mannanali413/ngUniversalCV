import { Component, OnInit } from '@angular/core';

import { RightStickyComponent } from './right-sticky/right-sticky.component';
import { MegaMenuComponent } from './mega-menu/mega-menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header-modified.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
