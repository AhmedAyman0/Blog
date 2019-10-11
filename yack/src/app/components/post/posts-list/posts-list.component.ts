import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  logined=false;
  loginedUser=null;
  posts = [];
  constructor(private postserv:PostServiceService,private loginserv:AuthService) {
    this.loginserv.logined.subscribe(user=>{
      console.log(user);
      this.loginedUser=user;
      if(user){
        this.logined=true;
      }
      else{
        this.logined=false;
      }
    })
   }

  ngOnInit() {
    this.postserv.getAll().subscribe((resp:any)=>{
      this.posts=resp;
      console.log(this.posts);
    })
  }

}
