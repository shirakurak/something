import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { DogsComponent } from './page/dogs/dogs.component';
import { DogDetailComponent } from './page/dog-detail/dog-detail.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'dogs',
    pathMatch: 'full',
    component: DogsComponent
  },
  {
    path: 'dog-detail',
    pathMatch: 'full',
    component: DogDetailComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
