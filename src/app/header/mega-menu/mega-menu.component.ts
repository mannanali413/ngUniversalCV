import { Component, OnInit } from '@angular/core';

import { ActiveMenuDirective } from './active-menu.directive';

import {JSONData} from './mega-menu.data';

@Component({
  selector: 'app-mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.scss']
})
export class MegaMenuComponent implements OnInit {
  private menuData: any;

  constructor() { }

  ngOnInit() {
    this.menuData = JSONData
  }

}
