import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online{
        background-color:  orange;
    }
    `]

})

export class ServerComponent{
    serverId: number = 10132;
    serverStatus: string = 'offline';
    changeValue = 'On';
    checkOn = true;

    constructor() {
        this.serverStatus = Math.random()>0.5 ? 'online' : 'offline';
    }

    onClickEvent() {
        if(this.checkOn){
            this.changeValue = 'Off';
        }else{
            this.changeValue = 'On';
        }
        this.checkOn = !this.checkOn;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green':'red';
    }
    getServerStatus(){
        return this.serverStatus;
    }
}