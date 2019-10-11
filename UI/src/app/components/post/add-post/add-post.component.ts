import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../post';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

 
  postForm: FormGroup;
  submitted = false;
  message: string =null;
  categories = [];
  constructor(private formBuilder: FormBuilder, private router: Router,private postserv: PostServiceService,
    private categoryserv:CategoryService
    ) {}

  ngOnInit() {
    this.categoryserv.getAll().subscribe((resp:any)=>{
      this.categories= resp;
      console.log(resp);
    });
    this.postForm = this.formBuilder.group({
      title:["",[Validators.required]],
      content:['',[Validators.required]],
      category:['',[Validators.required]]

  });
}
  get form() {
    return this.postForm.controls;
  }

  onSubmit() {
    console.log(this.postForm.value)
    let post = new Post(0,this.postForm.value.title,this.postForm.value.content,new Date(),new Date()
    ,parseInt(this.postForm.value.category),[]);
console.log(post,'p')
    this.postserv.post(post).subscribe(resp=>this.router.navigateByUrl('/'));

  }

  }