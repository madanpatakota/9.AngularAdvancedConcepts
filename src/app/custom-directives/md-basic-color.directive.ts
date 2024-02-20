import {
  Directive,
  ElementRef,
  Host,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appMdBasicColor]',
})
export class MdBasicColorDirective implements OnInit, OnChanges {
  // Case 3
  // When you use @HostBinding to bind the color, the color value is directly bound to a host element property within the directive
  @HostBinding('style.fontSize') mdFontSize: string;
  //Case 4

  constructor(private elementRef: ElementRef) {
    //Case 3
    this.mdFontSize = '20px';
  }

  //Case 1:
  //Applying the color based on the directive
  ngOnInit(): void {
    //this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    //this.backgroundColor1 = "yellow";
  }

  //Case 2:
  @Input() colorName: string;
  // Applying the color based on the directive with input Property
  //So this process will happens while we are executing the ngOnchanges page lifecycle and
  // When you use @Input to bind the color, the color value is passed from the parent component to the directive as an input property.

  //Taking value from component i.e. red
  @Input() mdinputbgColor: string;
  @HostBinding('style.backgroundColor') mdHostSylebgColor: string;
  ngOnChanges(changes: SimpleChanges): void {
    this.elementRef.nativeElement.style.backgroundColor = this.colorName;
    //Case 4
    this.mdHostSylebgColor = this.mdinputbgColor;
  }

  //Case 3.
  // When mouseover the element then triggers the MouseOver event
  // When mouseLeave the element hen triggers the MouseLeave Event

  // @HostBinding('style.fontColor') mdfontColor:string;
  // @Input('mdinputfontColor') mdinputfontColor:string = "";
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.mdfontColor = this.mdinputfontColor;
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.mdfontColor = 'red';
  // }
}
