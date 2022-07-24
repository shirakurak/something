import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StepperService } from 'src/app/service/stepperService';
import { Dog } from '../../../models/Dog';
import { RegisterComponent } from '../register.component';

@Component({
  selector: 'app-owner-register',
  templateUrl: './owner-register.component.html',
  styleUrls: ['./owner-register.component.css']
})

export class OwnerRegisterComponent implements OnInit {
  dog = new Dog('','','','','','');
  @ViewChild('UploadFileInput') uploadFileInput: ElementRef;
  myfilename: string;
  apiUrl: string = 'http://localhost:1598/api';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
  };
  
  constructor(private http: HttpClient, private stepperService:StepperService, private register:RegisterComponent) { }

  ngOnInit(): void {
    this.dog = this.register.getDog();
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
          this.dog.image = imgBase64Path;
          this.checkInput();
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
      // Reset File Input to Selct Same file again
      this.uploadFileInput.nativeElement.value = "";
    } else {
      this.myfilename = '';
    }
  }
  
  checkInput($event?: Readonly<Event>): void {
      if (this.dog.name != "" && this.dog.kind != ""
      && this.dog.age != "" && this.dog.sex != ""
      && this.dog.image != "") {
        console.log("next")
        this.register.stepper.setSecondStep({
          editable:true,
          completed:true,
          linear:true
        });
      } else {
        this.register.stepper.setSecondStep({
          editable:true,
          completed:false,
          linear:true
        });
      }
  }

}
