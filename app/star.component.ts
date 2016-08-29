import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector : 'star',
    //templateUrl : 'app/star.template.html'
    template : `
        <i  class="glyphicon"
       [class.glyphicon-star-empty] = "!isFav"
       [class.glyphicon-star] = "isFav"
       (click) = "onClick()"></i>
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