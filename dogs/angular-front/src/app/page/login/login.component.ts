import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../models/User';

export class FormKeySet {
  constructor(public key: string, public password: string, public name?: string){}
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  keySet = new FormKeySet('','');
  hide = true;
  errorMsg: string;
  apiUrl: string = 'http://localhost:1598/api';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
  };
  response: User;
  
  constructor(private http: HttpClient,private router: Router){}

  ngOnInit(){
  }

  public onValChange(val: string) {
  }

  onSubmit() {
      const data = new User(this.keySet.key, this.keySet.password);
      this.http.post<User>(this.apiUrl+"/login",data,this.httpOptions)
      .subscribe(
        (response)=>{
          this.response = response;
          if (this.response.roll === "applicant") {
            this.router.navigateByUrl('/dogs');
          } else if (this.response.roll === "owner") {
            this.router.navigateByUrl('/applicants');
          }
        },
        (error) => {
          this.errorMsg = "指定されたユーザIDとパスワードに対するユーザが存在しません。";
        }
      );
  }
}