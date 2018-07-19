import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector:`[app-servers]`,
 // selector:'.app-servers',
  //template:'<app-server></app-server><app-server></app-server>',
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  allowNewUser=false;
  serverCreationStatus='No server was created!';
  serverName='';
  userName='';
  display:boolean=false;
  serverCreated=false;
  clickArray=[];
  clickCount:number=0;
  i:number=0;
  
  servers=['TestServer','TestServer2'];
  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);
    
   }

  ngOnInit() {
    
  }
  onCreationStatus(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus='Server was created' + this.serverName;

  }

  onUpdateServerName(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }

  onAddUser(event:any)
  {
    if(this.userName != '')
    {
      this.allowNewUser=true;
    }
   
  }

  onResetUser()
  {
    this.userName='';
  }

  displayDetails(){
    this.display=true;
    this.i++;
    //this.clickArray.push(this.i);
    this.clickArray.push(new Date());
    this.clickCount=this.clickArray.length;
  }
  getItemColor(){
    return this.i > 4?'blue':'white';
  }
}
