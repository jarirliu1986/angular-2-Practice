import {Component} from 'angular2/core'
import {CourseService} from './courses.service'
import {AutoGrowDirective} from './auto-grow.directive'
import {HighlightDirective} from './highlight.directive'

@Component({
    selector:'courses',
    template:`
        <!--<h2 myHighlight>Courses</h2>-->
        <h2>Courses</h2>
        <!--<input type="text" autoGrow />-->
        {{title}}
        <ul>
            <li *ngFor="#course of courses">{{course}}</li>
        </ul>
    `,
    providers : [CourseService],
    directives : [AutoGrowDirective, HighlightDirective]
})
export class CourseComponent{
    title = "name of the page";
    courses;
    constructor (courseService : CourseService){
        this.courses = courseService.getCourses();
    }
}
