import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }

  base='http://localhost:54589/api/comments'
  post(comment:Comment){
    return this.http.post(this.base,comment);
  }
}
