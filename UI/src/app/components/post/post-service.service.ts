import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http:HttpClient) { }

  base='http://localhost:54589/api/posts';
  getAll(){
    return this.http.get(this.base)
  }
  get(id:number){
    return this.http.get(this.base+'/'+id);
  }
  post(post:Post){
    return this.http.post(this.base,post);
  }
}
