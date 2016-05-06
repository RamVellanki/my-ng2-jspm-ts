import { Component } from 'angular2/core';
// import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Location, LocationStrategy, HashLocationStrategy, Router} from 'angular2/router';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {MdToolbar} from '@angular2-material/toolbar';
import {Home} from 'src/app/components/home/home'; 
@Component({
    selector: 'my-app',
    templateUrl : './src/app/app.html',
    styleUrls: ['./src/app/app.css'],
    directives: [ROUTER_DIRECTIVES, MdToolbar]
})

@RouteConfig([
    { path: "/", as: "Home", component: Home }
])

export class AppComponent {
    constructor(){
        
    }
}