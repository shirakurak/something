import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './page/login/login.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DogsComponent } from './page/dogs/dogs.component';
import { DogDetailComponent } from './page/dog-detail/dog-detail.component';
import { CommonRegisterComponent } from './page/register/common-register/common-register.component';
import { OwnerRegisterComponent } from './page/register/owner-register/owner-register.component';
import { RegisterComponent } from './page/register/register.component';
import { ConfirmRegisterComponent } from './page/register/confirm-register/confirm-register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DogsComponent,
    DogDetailComponent,
    CommonRegisterComponent,
    OwnerRegisterComponent,
    RegisterComponent,
    ConfirmRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatRadioModule,
    MatListModule,
    MatDividerModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
