import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService, UserLogin } from 'src/app/service/login-service.service';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  constructor(private loginService:LoginServiceService,
    private router:Router) {}
  userLogin:UserLogin=new UserLogin
 
  login(){
    this.loginService.login(this.userLogin).subscribe(
      data=>{
        localStorage.setItem("token",data.token)
        localStorage.setItem("userType",data.userType)
        window.alert("Welcome "+data.userName)
        this.router.navigate(['dashboard'])
      },
      error=>{
       window.alert("Invalid Credentials!")
      }
      
    );
  }
}
