import { Component,OnInit } from '@angular/core';
import {loginService} from './app.loginService';


@Component({
  selector: 'app-login',
  templateUrl: './app.login.html'
  
})
export class LoginComponent {
  title='Leave approval management';logindata:any;
constructor(private loginSer:loginService){}
getdata():void{
  this.loginSer.getData()
  .then(
    data=>this.logindata=data,
  );
}

ngOnInit(): void {
    this.getdata();
  }

login(username:string,password:string){
  this.logindata.forEach(element => {
    if(element.adminUserName == password&&element.adminPassword==username)
  this.title="done";location.reload('/admin');
  else
  this.title="heheheheheh";
  });
  
}

}