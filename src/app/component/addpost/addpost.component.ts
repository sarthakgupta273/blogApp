import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { postData } from '../../model/postData';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-addpost',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './addpost.component.html',
  styleUrl: './addpost.component.css'
})
export class AddpostComponent {

  constructor(private _datasev: DataService, private router: Router) {}

  blogPost: postData = new postData();
  base64textString: string;
  img: ArrayBuffer

  

  onSubmit() {

    this.blogPost.id = Math.floor(Math.random() * (999- 11 + 1)) + 11;
    
    // this.img = stringToArrayBuffer(this.base64textString);
    this.blogPost.url = this.base64textString;

    console.log('Form submitted:', this.blogPost);
    this._datasev.addPosts(this.blogPost).subscribe({
      next: () => {
        alert("Added Successfully");
        // Perform any additional actions after successful addition
      },
      error: (err) => {
        console.error(err);
        alert("Failed to add post: " + err.message);
        // Handle the error, show a user-friendly message
      },
      complete: () => {
        console.log('Add post completed');
        this.router.navigate(['/post']);
        // Perform any actions after the addition process is completed
      }
    });
  }
  
  onFileChange(event: any) {
    const files = event.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();

      reader.onload = (readerEvt) => {
        this._handleReaderLoaded(readerEvt);
      };

      reader.readAsBinaryString(file);
    }
    
  }

  _handleReaderLoaded(readerEvt: any) {
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    console.log(this.base64textString);
  }
  
  }
  

  
  



function stringToArrayBuffer(base64textString: any): ArrayBuffer {
  const encoder = new TextEncoder();
  return encoder.encode(base64textString).buffer;
}
  // onFileChange(event: any) {
  //   const files = event.target.files;
  //   const file = files[0];

  //   if (files && file) {
  //     const reader = new FileReader();

  //     reader.onload = (readerEvt) => {
  //       this._handleReaderLoaded(readerEvt);
  //     };

  //     reader.readAsBinaryString(file);
  //   }
    
  // }

  // _handleReaderLoaded(readerEvt: any) {
  //   const binaryString = readerEvt.target.result;
  //   this.base64textString = btoa(binaryString);
  //   console.log(this.base64textString);
  // }