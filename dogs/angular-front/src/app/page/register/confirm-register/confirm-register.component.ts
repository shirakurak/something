import { Component, OnInit } from '@angular/core';
import { Dog } from 'src/app/models/Dog';
import { User } from 'src/app/models/User';
import { RegisterComponent } from '../register.component';

@Component({
  selector: 'app-confirm-register',
  templateUrl: './confirm-register.component.html',
  styleUrls: ['./confirm-register.component.css']
})
export class ConfirmRegisterComponent implements OnInit {
  user: User;
  dog: Dog;
  sex: string;
  constructor(private register:RegisterComponent) {
    this.user = register.getUser();
    this.dog = register.getDog();
    this.sex = this.dog.sex === 'man' ? "オス":"メス";
  }

  ngOnInit(): void {
  }

}
