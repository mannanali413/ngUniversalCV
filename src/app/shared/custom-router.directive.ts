import { Component, Directive, Attribute, ElementRef, ViewContainerRef,
         ComponentFactoryResolver, Injector, ResolvedReflectiveProvider, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data, RouterOutlet, RouterOutletMap } from '@angular/router';

import { HttpClientService } from './services/http-client.service';

@Directive({
  selector: 'customRouter',
})
export class CustomRouterDirective extends RouterOutlet implements OnInit {

  private parentRouter: Router;
  private httpClientService: HttpClientService;

  constructor(parentOutletMap: RouterOutletMap,
              location: ViewContainerRef,
              resolver: ComponentFactoryResolver,
              @Attribute('name') name: string,
              parentRouter: Router
  ) {
    super(parentOutletMap, location, resolver, name);
    this.parentRouter = parentRouter;
  }

  ngOnInit(){
    console.log('hi');
  }

  activate(activatedRoute: ActivatedRoute,
           loadedResolver: ComponentFactoryResolver,
           loadedInjector: Injector,
           providers: ResolvedReflectiveProvider[],
           outletMap: RouterOutletMap,
           ): void {
     activatedRoute.params.subscribe(
       (data) => this.loadContent(data, () => super.activate(activatedRoute, loadedResolver, loadedInjector, providers, outletMap)),
       (error) => console.error(error),
       () => console.log('route loaded')
     )
  }

  private loadContent(data: any, callback: () => void){
    let { category, sub_category, sub_sub_category } = data;
    // this.httpClientService.get('').subscribe(
    //   (data) => console.log(data),
    //   (error) => console.error(error),
    //   () => console.log('completed')
    // )
    callback();
  }

}
