import { Routes } from '@angular/router';
import { AddpostComponent } from './component/addpost/addpost.component';
import { CommentComponent } from './component/comment/comment.component';
import { LoginComponent } from './component/login/login.component';
import { PostdetailsComponent } from './component/postlist/postdetails/postdetails.component';
import { PostlistComponent } from './component/postlist/postlist.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    {path:'', component: LoginComponent},
    {path:'login', component: LoginComponent},
    {path:'register', component: RegistrationComponent},
    {path:'post', component: PostlistComponent, canActivate: [authGuard]},
    {path:'detail/:id', component: PostdetailsComponent, canActivate: [authGuard]},
    {path:'addpost', component: AddpostComponent, canActivate: [authGuard]},
    {path:'comment', component: CommentComponent, canActivate: [authGuard]}
];
