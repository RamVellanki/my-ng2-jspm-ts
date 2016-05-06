import 'zone.js';
import 'reflect-metadata';

import { bootstrap } from 'angular2/platform/browser';
import {Component, provide} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';


import { AppComponent } from './app.component';
 
bootstrap(AppComponent, [ROUTER_PROVIDERS]);

//For some reason, if I include LocationStrategy it is giving token not found error
//, provide(LocationStrategy, { useClass: HashLocationStrategy })]);