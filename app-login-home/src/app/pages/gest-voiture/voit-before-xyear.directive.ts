import { Directive, HostBinding, Input, ElementRef, Renderer2, OnInit} from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Directive({
  selector: '[appVoitBeforeXYear]'
})
export class VoitBeforeXYearDirective implements OnInit {
  xYear: number = 2013;
  yearValue: number;
  
  /** This directive set : permit to get parameters value through the template */
  @Input() set appVoitBeforeXYear(value){
    this.yearValue = value;
  }
  constructor(private elmRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if(this.isBeforeXYear(this.yearValue)){
      // console.log(this.isBeforeXYear(this.yearValue));
      // this.renderer.addClass(this.elmRef.nativeElement, 'redLine');
      this.renderer.setStyle(this.elmRef.nativeElement, 'color', 'red')
    }
  }

  isBeforeXYear(value) {
    return (this.xYear > value);
  }
}
