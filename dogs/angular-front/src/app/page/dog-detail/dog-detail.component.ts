import { Component, OnInit } from '@angular/core';
import { Dog } from 'src/app/models/Dog';
import { DogService } from 'src/app/service/DogService';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.css']
})
export class DogDetailComponent implements OnInit {

  dog: Dog;

  constructor(private dogService: DogService) { }

  ngOnInit(): void {
    this.dog = this.dogService.getDog();
  }

}
