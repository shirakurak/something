import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../models/user';

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
  selectedValue: string;
  errorMsg: string;
  apiUrl: string = 'http://localhost:1598/api';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
  };
  response: User;
  
  constructor(private http: HttpClient,private router: Router){}
public selectedVal: string;

  ngOnInit(){
    this.selectedVal = "login";
  }

  public onValChange(val: string) {
    this.selectedVal = val;
  }

  onSubmit(type:string) {
    if (type === "login") {
      const data = new User(this.keySet.key, this.keySet.password);
      this.http.post<User>(this.apiUrl+"/login",data,this.httpOptions)
      .subscribe(
        (response)=>{
          this.response = response;
          this.router.navigateByUrl('/dogs');
        },
        (error) => {
          this.errorMsg = "指定されたユーザIDとパスワードに対するユーザが存在しません。";
        }
      );
    } else if (type === "register") {
      const data = new User(this.keySet.key, this.keySet.password, this.keySet.name);
      this.http.put<User>(this.apiUrl+"/register",data,this.httpOptions)
      .subscribe(
        (response)=>{
          this.response = response;
          this.router.navigateByUrl('/dogs');
        },
        (error) => {
          this.errorMsg = "ユーザ登録に失敗しました。";
        }
      );
    }
  }
}