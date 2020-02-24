import { Component } from '@angular/core';
import {Test} from './test'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test';
  sear: string;
  list:Test[] = [
    {name: 'test1', num: 120},
    {name: 'qest1', num: 120},
    {name: 'eest1', num: 120},
    {name: 'gest1', num: 120},
    {name: 'yest1', num: 120},
    {name: 'kest1', num: 120},
    {name: 'zest1', num: 120},
  ]
}
