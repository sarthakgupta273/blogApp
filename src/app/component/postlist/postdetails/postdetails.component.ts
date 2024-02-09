import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { postData } from '../../../model/postData';
import { DataService } from '../../../service/data.service';
import { CommentComponent } from '../../comment/comment.component';

@Component({
  selector: 'app-postdetails',
  standalone: true,
  imports: [RouterModule, CommentComponent],
  templateUrl: './postdetails.component.html',
  styleUrl: './postdetails.component.css'
})
export class PostdetailsComponent implements OnInit {
  constructor(private _dataser: DataService, private activeRoute : ActivatedRoute) {}
  Blogss : postData[];
  Blogs : any;
  BlogsId : any;
  ngOnInit(): void {
    this._dataser.getPosts().subscribe(
      user=>{
        this.Blogss=user
        this.BlogsId=this.activeRoute.snapshot.params['id'];
        console.log(this.BlogsId)
        this.Blogs = this.Blogss.find((x) => x.id == this.BlogsId);
      },
      error=>{
        console.log(error)
      }
    )
  }
}
