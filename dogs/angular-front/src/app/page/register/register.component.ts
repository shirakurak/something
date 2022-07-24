import { Component, OnInit } from '@angular/core';
import { StepperService } from 'src/app/service/stepperService';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../models/User';
import { Dog } from '../../models/Dog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User('','','','','');
  dog = new Dog('','','','','','')
  stepper:StepperService
  apiUrl: string = 'http://localhost:1598/api';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
  };
 
  constructor(private stepperService:StepperService, private http: HttpClient, private router: Router) {
    this.stepper = stepperService;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const data = {
      "user":this.user,
      "dog":this.dog
    };
    this.http.post<User>(this.apiUrl+"/register/"+this.user.roll,data,this.httpOptions)
      .subscribe(
        (response)=>{
          if (this.user.roll === "applicant") {
            this.router.navigateByUrl('/dogs');
          } else if (this.user.roll === "owner") {
            this.router.navigateByUrl('/applicants');
          }
        },
        (error) => {
        }
      );
  }

  getUser(): User {
    return this.user;
  }
  
  setUser(user:User) {
    this.user = user;
  }

  getDog(): Dog {
    return this.dog;
  }
  
  setDog(dog:Dog) {
    this.dog = dog;
  }

}
