import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class loginService {
    constructor(public http:Http) {}

getData(): Promise<any>{
    return this.http.get("./assets/database.json")
        .toPromise()
        .then(response=>response.json().LoginService);
        
        
  }
}