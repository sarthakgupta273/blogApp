import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { comment } from '../model/comment';

import { postData } from '../model/postData';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpcl: HttpClient) {}

  

  Data = [ {
      "id": 10,
      "title": "Swimming Techniques for Efficiency",
      "content": "Improving swimming efficiency through proper stroke techniques.",
      "author": "Michael Phelps",
      "date": "2023-12-04",
      "tags": ["Swimming", "Sports", "Techniques"],
      "url": "./assets/10.jpeg"
    }
  ]

  addnewpost(blogPost: any) {
    this.Data.push(blogPost);
    console.log(blogPost);
  }

  baseUrl = "http://blogsarthak.itcblogs.xyz/post/upload";

  public addPosts(postData: any): Observable<Object> { 
    console.log(postData); 
    return this.httpcl.post(this.baseUrl, postData);
  }

  baseUrl1 = "http://blogsarthak.itcblogs.xyz/post/view";

  public getPosts() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpcl.get<postData[]>(this.baseUrl1, {headers});
  }

  baseUrl2 = "http://blogsarthak.itcblogs.xyz/post/addComment"
  addComments(info:comment)
  {
    return this.httpcl.post(this.baseUrl2, info )
  }

 


  showComments(id:string)
  {
    return this.httpcl.get(`http://blogsarthak.itcblogs.xyz/post/getComments/${id}`)
  }

}
