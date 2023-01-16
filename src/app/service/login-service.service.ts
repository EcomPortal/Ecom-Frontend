import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

export class UserLogin{
  username:string=''
  password:string=''
  token:string=''
  userName:string=''
}

export class UserRegister{
  email:string=''
  password:string=''
  userName:string=''
  phoneNo:string=''
}

export class ParentProduct{
  productName:string=''
  imageUrl:string=''
}

export class ForgetPassword{
  email:string=''
  password:string=''
  retypePassword:string=''
}
export class SubProduct{
subProductName:string=''
imageUrl:string=''
parentProductId:string=''
}

@Injectable({
  providedIn: 'root'
})



export class LoginServiceService {
  user:UserLogin=new UserLogin
  userRegister:UserRegister=new UserRegister
  forget:ForgetPassword=new ForgetPassword
  isLoggedIn:boolean=false
  parentProduct:ParentProduct=new ParentProduct
  subProduct:SubProduct=new SubProduct
  constructor(private http:HttpClient) { }
   baseUrl:string='http://192.168.12.51:9090/'
  login(user:any){
    this.isLoggedIn=true
    return this.http.post<UserLogin>(this.baseUrl+"user/v1/signIn",user)
  }

  register(userRegister:any){
    return this.http.post<UserRegister>(this.baseUrl+"user/v1/signUp",userRegister);
  }

  forgetPassword(forget:any){
    return this.http.post<ForgetPassword>(this.baseUrl+"user/v1/forgetPassword",forget);
  }
  isUserLoggedIn(){
    let user=localStorage.getItem('token')
    return !(user===null);
  }
  logout(){
    this.isLoggedIn=false
    localStorage.removeItem('token')
  }
  getParentProductData(){
    let header = new HttpHeaders().set(
      "Authorization","Bearer "+localStorage.getItem("token") || '{}'
    );
    return this.http.get<ParentProduct>(this.baseUrl+'getAll/parent/product',{headers:header})
  }
  addNewParentProduct(parentProduct:any){
    let header = new HttpHeaders().set(
      "Authorization","Bearer "+localStorage.getItem("token") || '{}'
    );
    console.log(parentProduct)
    return this.http.post<ParentProduct>(this.baseUrl+'add/parent/product',parentProduct,{headers:header});
  }

  saveSubProduct(subProduct:any){
    let header = new HttpHeaders().set(
      "Authorization","Bearer "+localStorage.getItem("token") || '{}'
    );
    console.log(this.baseUrl+"add/subProduct")
    return this.http.post<SubProduct>(this.baseUrl+"add/subProduct",subProduct,{headers:header})
  }

  getSubProduct(id:number){
    let header = new HttpHeaders().set(
      "Authorization","Bearer "+localStorage.getItem("token") || '{}'
    );
    return this.http.get(this.baseUrl+'getAll/subProduct/'+id,{headers:header})
  }
}
