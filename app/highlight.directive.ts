import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({ selector: '[myHighlight]' })
export class HighlightDirective {
    constructor(el: ElementRef, renderer: Renderer) {
        renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
    }
}