import {Component} from 'angular2/core';
import {MdButton} from '@angular2-material/button';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';


@Component({
    selector: 'Home',
    templateUrl: './src/app/components/home/home.html',
    styleUrls: ['./src/app/components/home/home.css'],
    directives: [MdButton, MD_INPUT_DIRECTIVES, MD_CARD_DIRECTIVES]
})

export class Home {
}
