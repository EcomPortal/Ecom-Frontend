import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponentComponent } from './login/login-component/login-component.component';
import { LogoutComponent } from './logout/logout.component';
import { ParentProductComponent } from './parent-product/parent-product.component';
import { RouterGuardServiceService } from './router-guard-service.service';
import { RegistrationFormComponent } from './signup/registration-form/registration-form.component';
import { SubProductComponent } from './sub-product/sub-product.component';
import { SubproductformComponent } from './subproductform/subproductform.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponentComponent
  },
  {
    path:'registration',
    component:RegistrationFormComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[RouterGuardServiceService]
  },
  {
    path:'forgetPassword',
    component:ForgetPasswordComponent
  },
  {
    path:'logout',
    component:LogoutComponent
  },
  {
    path:'parentProduct',
    component:ParentProductComponent,
    canActivate:[RouterGuardServiceService]
  },
  {
    path:'subproduct/:id',
    component:SubProductComponent,
    canActivate:[RouterGuardServiceService]
  },
  {
    path:'subProductAdd/:id',
    component:SubproductformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
