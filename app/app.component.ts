import {Component} from 'angular2/core';
/*
import {CourseComponent} from './courses.component'
import {AuthorComponent} from './author.component'
import {StarComponent} from './star.component'
import {LikeComponent} from './like.component'
import {VoterComponent} from './voter.component'*/
import {TweetComponent} from './tweet.component'
import {TweetService} from './tweet.service'

@Component({
    selector: 'my-app',
    template: `
        <div *ngFor="#tweet of tweets">
            <tweet [data]="tweet"></tweet>
        </div>
     <!--   
        <voter [myVote]="post.myVote" [voteCount]="post.voteCount" (vote)="onVote($event)"></voter>
        <like [iLike]="tweet.like" [totalLikes]="tweet.total" ></like>
        <star [isFav] = "post.isFav" (change)="onFavChange($event)"></star><h1>hello angular</h1>
        <courses></courses>
        <author></author>
        <button class="btn btn-primary">Submit</button>
        -->
    `,
    directives: [TweetComponent/*, CourseComponent, AuthorComponent,
                StarComponent, LikeComponent, VoterComponent*/],
    providers: [TweetService]
})
export class AppComponent {
    tweets: any[];

    constructor(tweetService: TweetService){
        this.tweets = tweetService.getTweets();
    }

    post = {
        isFav : true,
        title : "Title",
        myVote : 0,
        voteCount : 10
    }
    onVote($event){
        console.log($event);
    }

    onFavChange ($event){
        console.log($event);
    }

    tweet = {
        like : false,
        total : 10
    }
}