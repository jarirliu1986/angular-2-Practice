import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector : 'star',
    templateUrl : 'app/star.template.html'
})
export class StarComponent{
    @Input() isFav = false;
    @Output() change = new EventEmitter();
    onClick(){
        this.isFav = !this.isFav;
        this.change.emit({newValue : this.isFav});
    }
}