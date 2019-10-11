import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  base = 'http://localhost:54589/api/categories'
  getAll(){
    return this.http.get(this.base);
  }
  get(id:number){
    return this.http.get(this.base+'/'+id);

  }
}
