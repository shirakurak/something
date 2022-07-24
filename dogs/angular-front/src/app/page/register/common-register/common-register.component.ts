import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { Dog } from '../../../models/Dog';
import { RegisterComponent } from '../register.component';

@Component({
  selector: 'app-common-register',
  templateUrl: './common-register.component.html',
  styleUrls: ['./common-register.component.css']
})

export class CommonRegisterComponent implements OnInit {
  hide = true;
  user: User;
  
  constructor(private register:RegisterComponent) { }

  ngOnInit(): void {
    this.user = this.register.getUser();
  }

  checkInput($event: Readonly<Event>): void {
      if (this.user.id != "" && this.user.name != ""
      && this.user.password != "" && this.user.address != ""
      && this.user.roll != "") {
        console.log("next")
        this.register.stepper.setFirstStep({
          editable:true,
          completed:true,
          linear:true
        });
      } else {
        this.register.stepper.setFirstStep({
          editable:true,
          completed:false,
          linear:true
        });
      }
  }

}
