import { Directive, ElementRef, EventEmitter, Input, Output, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appIntersectionObserver]'
})
export class IntersectionObserverDirective implements OnInit, OnDestroy {
  @Input() options: IntersectionObserverInit = {};
  @Output() visible = new EventEmitter<boolean>();

  private observer!: IntersectionObserver;

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.observer = new IntersectionObserver(([entry]) => {
      this.visible.emit(entry.isIntersecting);
    }, this.options);

    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
