import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test';

  serverData = '';

  serverCreate: boolean = false;


  onInput(event:Event){
    this.serverData = (<HTMLInputElement>event.target).value; 
  }
  
  onServer(){
    this.serverCreate = true;
  }

}
