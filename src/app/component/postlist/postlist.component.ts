import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { postData } from '../../model/postData';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-postlist',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './postlist.component.html',
  styleUrl: './postlist.component.css'
})
export class PostlistComponent implements OnInit{
  constructor(private _datasev: DataService, private sanitizer: DomSanitizer) {}
  Data: postData[] = [];
  blogPost: postData = new postData();
  img : string;
  ngOnInit(): void {

    
    this._datasev.getPosts().subscribe({
      next: (response) => {
        this.Data = response;
        console.log(this.Data)
        console.log(this.Data);
      },
      error: (error) => {
        console.error('Error fetching blog posts:', error);
      }
    });
  }

}
