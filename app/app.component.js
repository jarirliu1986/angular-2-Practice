System.register(['angular2/core', './tweet.component', './tweet.service', './zippy.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tweet_component_1, tweet_service_1, zippy_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(tweetService) {
                    this.zippyData = {
                        stuff1: {
                            info: "basic info",
                            name: "john",
                            age: 28
                        },
                        stuff2: {
                            info: "detail info",
                            name: "Aires Liu",
                            age: 28
                        }
                    };
                    this.post = {
                        isFav: true,
                        title: "Title",
                        myVote: 0,
                        voteCount: 10
                    };
                    this.tweet = {
                        like: false,
                        total: 10
                    };
                    this.tweets = tweetService.getTweets();
                }
                AppComponent.prototype.onVote = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onFavChange = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <zippy [title]=\"zippyData.stuff1.info\">\n            Name is {{zippyData.stuff1.name}}, age is {{zippyData.stuff1.age}}\n        </zippy>\n        <zippy [title]=\"zippyData.stuff2.info\">\n            Name is {{zippyData.stuff2.name}}, age is {{zippyData.stuff2.age}}\n        </zippy>\n     <!--   \n        <div *ngFor=\"#tweet of tweets\">\n            <tweet [data]=\"tweet\"></tweet>\n        </div>\n        \n        <voter [myVote]=\"post.myVote\" [voteCount]=\"post.voteCount\" (vote)=\"onVote($event)\"></voter>\n        <like [iLike]=\"tweet.like\" [totalLikes]=\"tweet.total\" ></like>\n        <star [isFav] = \"post.isFav\" (change)=\"onFavChange($event)\"></star><h1>hello angular</h1>\n        <courses></courses>\n        <author></author>\n        <button class=\"btn btn-primary\">Submit</button>\n        -->\n    ",
                        directives: [zippy_component_1.ZippyComponent, tweet_component_1.TweetComponent /*, CourseComponent, AuthorComponent,
                                        StarComponent, LikeComponent, VoterComponent*/
                        ],
                        providers: [tweet_service_1.TweetService]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map