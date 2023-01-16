import { Component, OnInit, PipeTransform } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from '../service/login-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  parentDataArray:any=[]
  constructor(private router:Router,
    private loginService:LoginServiceService,
    private activateRoute:ActivatedRoute){}
  ngOnInit() {
    this.loginService.getParentProductData().subscribe(
      data=>{
        this.parentDataArray=data
      },
      error=>{
        console.log(error)
      }
    );
  }

  logout(){
    localStorage.removeItem("token")
    this.router.navigate(['/'])
  }

  getSubProduct(id:number){
     this.router.navigate(['subproduct',id])
  }
  
}
