import {Component} from 'angular2/core';
import {CourseComponent} from './courses.component'
import {AuthorComponent} from './author.component'
import {StarComponent} from './star.component'

@Component({
    selector: 'my-app',
    template: `
        <star></star><h1>hello angular</h1>
        <courses></courses>
        <author></author>
        <button class="btn btn-primary">Submit</button>
    `,
    directives: [CourseComponent, AuthorComponent, StarComponent]
})
export class AppComponent { }