import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})

export class StepperService {

  firstStep = {
    editable:false,
    completed:false,
    linear:false
  }

  secondStep = {
    editable:false,
    completed:false,
    linear:false

  }

  constructor() {
  }

  getFirstStep() {
    return this.firstStep;
  }
  
  getSecondStep() {
    return this.secondStep;
  }
  
  setFirstStep(firstStep:any) {
    this.firstStep = firstStep;
  }
  
  setSecondStep(secondStep:any) {
    this.secondStep = secondStep;
  }
}