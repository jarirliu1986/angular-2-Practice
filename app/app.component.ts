import {Component} from 'angular2/core';
import {CourseComponent} from './courses.component'

@Component({
    selector: 'my-app',
    template: '<h1>hello angular</h1><courses></courses>',
    directives: [CourseComponent]
})
export class AppComponent { }