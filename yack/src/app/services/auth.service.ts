import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  base = 'http://localhost:54589/api/auth/login';
  
  private _logined: BehaviorSubject<User>;


  constructor(private http:HttpClient) {
   this._logined = new BehaviorSubject(null);
    
  }

  get logined(){
    return this._logined.asObservable();
  } 
  login(user:User) {
    this.http.post(this.base,user,{
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(resp=>{
      let token = (<any>resp).token;
      localStorage.setItem("jwt", token);
      localStorage.setItem("user", JSON.stringify(user));

    },
    err=>{
      user = null;
    }
    )
    return this._logined.next(user);
  }
  logout() {
    localStorage.setItem("user", null);
    return this._logined.next(null);
  }

}