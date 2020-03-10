import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  serverId = 10;

  serverStatus: string = 'offline'

  constructor() { 
    this.serverStatus = Math.random() >  0.5 ? 'online' : 'offline';
  }

  getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'offline' ? 'red' : 'green';
  }

  ngOnInit(): void {
  }

}
