import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
    selector : '[autoGrow]',
    host :{
        'focus' : 'onFocus()',
        'blur' : 'onBlur()'
    }
    //template : ''
})

export class AutoGrowDirective{
    constructor(private el : ElementRef, private renderer : Renderer){
        renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'red');
    }
    onFocus(){
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
    }

    onBlur(){
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'red');
    }
}