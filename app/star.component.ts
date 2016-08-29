import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector : 'star',
    template :　`
        <span  class="glyphicon"
            [class.glyphicon-star-empty] = "!isFav"
            [class.glyphicon-star] = "isFav"
            (click) = "onClick()"></span>
    `
})
export class StarComponent{
    @Input() isFav = false;
    @Output() change = new EventEmitter();
    onClick(){
        this.isFav = !this.isFav;
        this.change.emit({newValue : this.isFav});
    }
}