import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService, Product } from '../service/login-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  id:number=0
  productObj:any
  subproductName:any
  productList:any=[]
  product:Product=new Product
  addButton:boolean=false
  userType:any
  userTypeValue:string=''
  subProductId:number=0
  constructor(private activateRoute:ActivatedRoute,
    private router:Router,private loginService:LoginServiceService){}
  
  ngOnInit(){
    this.userType=localStorage.getItem("userType")
    this.userTypeValue=String(this.userType)
    if(this.userTypeValue==="Owner"){
        this.addButton=true
    }
    else{
      this.addButton=false
    }
    this.loginService.getAllProduct(this.activateRoute.snapshot.params['id']).subscribe(
      data=>{
        this.productObj=data
        this.subproductName=this.productObj.subProductName
        this.productList=this.productObj.productList
        this.subProductId=this.productObj.parentId
        // console.log(this.productList)
      },
      error=>{
        console.log(error)
      }
    );
  }
  addProduct(){
     this.id=this.activateRoute.snapshot.params['id']
     this.router.navigate(['addProduct'],{state:{id:this.id}})
  }

  updateProduct(product:any){
     this.product=product
     this.router.navigate(['addProduct',product.id])
  }

  deleteProduct(id:number){
    this.loginService.deleteProduct(id).subscribe();
    this.getAllData()
     
  }

  getAllData(){
    window.alert("Deleted Succesfully..")
    this.loginService.getAllProduct(this.activateRoute.snapshot.params['id']).subscribe(
      data=>{
       
        this.productObj=data
        this.subproductName=this.productObj.subProductName
        this.productList=this.productObj.productList
      },
      error=>{
        console.log(error)
      }
    );
  }

  backToSubproducts(){
    this.router.navigate(['subproduct',this.subProductId])
  }
  logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("userType")
    localStorage.removeItem('userId')
    this.router.navigate(['/'])
 }
 redirectProductPage(id:number){
  this.router.navigate(['productPage',id])
 }
}
