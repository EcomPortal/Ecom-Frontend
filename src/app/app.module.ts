import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login/login-component/login-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import{MatButtonModule} from '@angular/material/button';
import{MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import { RegistrationFormComponent } from './signup/registration-form/registration-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatMenuModule} from '@angular/material/menu';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LogoutComponent } from './logout/logout.component';
import { ParentProductComponent } from './parent-product/parent-product.component';
import { SubProductComponent } from './sub-product/sub-product.component';
import { SubproductformComponent } from './subproductform/subproductform.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    RegistrationFormComponent,
    DashboardComponent,
    ForgetPasswordComponent,
    LogoutComponent,
    ParentProductComponent,
    SubProductComponent,
    SubproductformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatMenuModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
