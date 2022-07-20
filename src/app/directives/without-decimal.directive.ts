import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[withoutDecimal]',
})
export class WithoutDecimalDirective {
  constructor(private el: ElementRef) {}
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (!event.key.match(/^[0-9]$/) && event.key !== 'Backspace') {
      event.preventDefault();
    }
  }
}
