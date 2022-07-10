import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DogService } from 'src/app/service/DogService';
import { Dog } from '../../models/Dog';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  dogs: Array<Dog>;
  loginUrl: string = 'http://localhost:1598/api/dogs';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
  };
 
  constructor(
    private http: HttpClient, 
    private router: Router,
    private dogService: DogService) { }

  ngOnInit(): void {
    this.http.get<Array<Dog>>(this.loginUrl)
    .subscribe(
      (response)=>{
        console.log(response);
        this.dogs = response;
      }
    );
  }

  showDetail(dog: Dog): void {
    this.dogService.setDog(dog);
    this.router.navigateByUrl("dog-detail");
  }
}
