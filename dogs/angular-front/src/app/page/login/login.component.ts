import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUser } from '../../models/loginUser';

export class LoginKeySet {
  constructor(public key: string, public password: string){}
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  keySet = new LoginKeySet('','');
  hide = true;
  errorMsg: string;
  loginUrl: string = 'http://localhost:1598/api/login';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
  };
  response: LoginUser;
  
  constructor(private http: HttpClient,private router: Router){}

  ngOnInit(): void {}

  onSubmit() {
    const data = new LoginUser(this.keySet.key, this.keySet.password);
    this.http.post<LoginUser>(this.loginUrl,data,this.httpOptions)
    .subscribe(
      (response)=>{
        this.response = response;
        this.router.navigateByUrl('/dogs');
      },
      (error) => {
        this.errorMsg = "指定されたユーザIDとパスワードに対するユーザが存在しません。";
      }
    );
  }
}