import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { PostsListComponent } from './components/post/posts-list/posts-list.component';
import { AddPostComponent } from './components/post/add-post/add-post.component';
import { PostDetailComponent } from './components/post/post-detail/post-detail.component';


const routes: Routes = [
  {path:'sign-in',component:SignInComponent},
  {path:'',component:PostsListComponent},
  {path:'posts/new',component:AddPostComponent},
  {path:'posts/:id',component:PostDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
