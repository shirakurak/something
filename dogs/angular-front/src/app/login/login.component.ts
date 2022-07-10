import { Component, OnInit } from '@angular/core';

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
  constructor(){}

  ngOnInit(): void {
    
  }

  onSubmit() {
    console.log(this.keySet);
  }
}