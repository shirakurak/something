import { Injectable } from "@angular/core";
import { Dog } from "../models/Dog";

@Injectable({
  providedIn: "root"
})

export class DogService {
  dog: Dog;

  constructor() {}

  setDog(dog: Dog){
    this.dog = dog;
  }

  getDog() {
    return this.dog;
  }
}