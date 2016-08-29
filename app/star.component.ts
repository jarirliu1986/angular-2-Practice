import {Component} from 'angular2/core'

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
    isFav = false;
    onClick(){
        this.isFav = !this.isFav;
    }
}