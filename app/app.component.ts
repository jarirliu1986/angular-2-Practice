import {Component} from 'angular2/core';
import {CourseComponent} from './courses.component'
import {AuthorComponent} from './author.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>hello angular</h1>
        <courses></courses>
        <author></author>
    `,
    directives: [CourseComponent, AuthorComponent]
})
export class AppComponent { }