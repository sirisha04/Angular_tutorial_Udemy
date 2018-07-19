import { Component } from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online{
        color:'white';
    }
    `]
})
export class ServerComponet{

    ServerId:number = 10;
    ServerStaus:string='Offline';
    constructor(){
        this.ServerStaus = Math.random()>0.5 ? 'Online' : 'Offline';
    }
    getServerStatus(){
        return  this.ServerStaus;
    }

    getColor(){
        return this.ServerStaus === 'Online' ? 'green' : 'red';
    }
}