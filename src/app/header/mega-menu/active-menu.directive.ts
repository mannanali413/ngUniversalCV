import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[appMenuActive]'
})

export class ActiveMenuDirective {

  constructor(private el: ElementRef, private renderer: Renderer){}

  @HostListener('mouseenter') onMouseEnter(){
    this.activateMenu(true);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.activateMenu(false);
  }

  private activateMenu(shouldActivate: boolean){
    if(shouldActivate){
      this.renderer.setElementClass(this.el.nativeElement, 'active', true);
    }
    else {
      this.renderer.setElementClass(this.el.nativeElement, 'active', false);
    }
  }

}
