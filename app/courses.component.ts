import {Component} from 'angular2/core'

@Component({
    selector:'courses',
    template:`
        <h2>Courses</h2>
        {{title}}
        <ul>
            <li *ngFor="#course of courses">{{course}}</li>
        </ul>
    `
})
export class CourseComponent{
    title = "name of the page";
    courses = ["Math", "English", "Music"];
}
