import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,} from 'rxjs';
import { user } from '../model/user';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl="http://loginsarthak.itcblogs.xyz/auth/register"

  constructor(private httpcl:HttpClient)  {
  }
  addUser(reg:user):Observable<Object>{
    console.log(reg)
    return this.httpcl.post(`${this.baseUrl}`,reg);
  }

  loginUser(data: any): Observable<any> {
    //const myHeader = new HttpHeaders({ authorization: 'Bearer b32nn232eqmn' });
    const loginData = {
      username: data.username,
      password: data.password,
    };
    localStorage.setItem("name",data.username)
    return this.httpcl.post(`http://loginsarthak.itcblogs.xyz/auth/login`, loginData);
  }
  

  loggedIn: boolean = false;
  login() {
    console.log('login fucntion called');
    this.loggedIn = true;
  }
  logout() {
    console.log('logout function called');
    this.loggedIn = false;
  }
  isAuthenticated() {
    console.log(this.loggedIn);
    return this.loggedIn;
  }
}
