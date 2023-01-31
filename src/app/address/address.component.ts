import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../service/login-service.service';



@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit{
  productData:any
  constructor(private router:Router,private loginService:LoginServiceService){}
  ngOnInit() {
    // this.address="ndsjcbsdncsduhvjsdnvjsdjvmsdmkvjskvosjvos,sbsdjbvjwjvkjwdv,whviwjvkjwdv"
    // this.addressList.push(this.address)
    // this.addressList.push("wencbwvnwuvjkw,wvvuwjhvujwbnvuwhv,wnvuwjivjwkv")
    // this.addressList.push("wfi2ifi29r2bhvgvhabvbf,nvjwqvhjeivjjhefvw")
    // console.log(this.addressList)
   this.loginService.getAddressList(localStorage.getItem("userId")).subscribe(
    data=>{
      this.addressList=data
      console.log(data)
    }
   );
  //  console.log(history.state.id)
   this.loginService.getProductDetailsById(localStorage.getItem("productId")).subscribe(
    data=>{
      this.productData=data
      console.log(this.productData)
    }
   );

  }
  address:string=''
  addressList:any=[]
  logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("userType")
    localStorage.removeItem('userId')
    this.router.navigate(['/'])
  }

  setAddress(item:any){
    console.log(item)
  }
}
