import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Comment } from 'src/app/models/comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  commentForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private postserv:PostServiceService,private aroute:ActivatedRoute,
    private router:Router,private commentserv:CommentService
    ) { }

  post:any;
  ngOnInit() {
    this.commentForm = this.formBuilder.group({
      comment:['',[Validators.required]],
      name:['',[Validators.required]]

  });
    this.aroute.params.subscribe(resp=>{
      let id = resp['id'];
      this.postserv.get(id).subscribe((resp:any)=>{
        this.post = resp;
      })
    })
  }

  get form() {
    return this.commentForm.controls;
  }
  onSubmit() {
    console.log('in')
   console.log(this.commentForm.value ) 
    this.submitted = true;
    if (this.commentForm.invalid) {
      return;
    }
    let comment = new Comment(0,this.commentForm.value.content,this.commentForm.value.name,new Date(),this.post.id)
    this.commentserv.post(comment).subscribe(
      resp=>    this.router.navigateByUrl('/')  )
    

  }
}
