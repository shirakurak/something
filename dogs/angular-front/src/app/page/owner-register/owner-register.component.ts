import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Dog } from '../../models/Dog';

@Component({
  selector: 'app-owner-register',
  templateUrl: './owner-register.component.html',
  styleUrls: ['./owner-register.component.css']
})

export class OwnerRegisterComponent implements OnInit {
  pet = new Dog('','','','');
  @ViewChild('UploadFileInput') uploadFileInput: ElementRef;
  myfilename = '写真';
  apiUrl: string = 'http://localhost:1598/api';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
  };
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  fileChangeEvent(fileInput: any) {

    if (fileInput.target.files && fileInput.target.files[0]) {
       this.myfilename = '';
      Array.from(fileInput.target.files).forEach((file: File) => {
        console.log(file);
        this.myfilename += file.name + ', ';
      });
      
      this.myfilename = this.myfilename.slice(0,-2);

      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {

          // Return Base64 Data URL
          const imgBase64Path = e.target.result;
          this.pet.image = imgBase64Path;
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);

      // Reset File Input to Selct Same file again
      this.uploadFileInput.nativeElement.value = "";
    } else {
      this.myfilename = '写真';
    }
  }
  
  onSubmit(): void {
      console.log("image:"+this.pet.image);
      this.http.post(this.apiUrl+"/dog",this.pet,this.httpOptions)
      .subscribe(
        (response)=>{
          console.log("success");
        },
        (error) => {
          console.log("failed");
        }
      );
  }

}
