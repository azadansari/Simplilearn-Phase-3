import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // productRef = new FormGroup({
  //   pid:new FormControl(),
  //   pname:new FormControl(),
  //   price:new FormControl(),
  //   url:new FormControl()
  // })

  // products:Array<Product>=[];
  // storeMsg:string="";

  // constructor(public pser:ProductService) { }

  // ngOnInit(): void {
  //   this.getAllProductDetails();
  // }

  // getAllProductDetails(){
  //   this.pser.getAllProduct().subscribe(result=>this.products=result);
  // }

  // storeProduct(){
  //   let product = this.productRef.value;
  //   // console.log(product);
  //   this.pser.storeProduct(product).subscribe(result=>this.storeMsg=result,
  //     error=>console.log(error),
  //     ()=>this.storeProduct());
  // }

  productRef = new FormGroup({
    pid : new FormControl(),
    pname : new FormControl(),
    price : new FormControl(),
    url : new FormControl()
  })
    products:Array<Product>=[];
    storeMsg:string="";
    deleteMsg:string="";
    updateMsg:string="";
    flag : boolean  = false;


    constructor(public pser:ProductService) { } //DI for service class

    // life cycle method of component which call only once after component loaded..
    ngOnInit(): void {
      this.getAllProductDetails();
    }

    getAllProductDetails(){
      this.pser.getAllProduct().subscribe(result=>this.products=result);
    }

    storeProduct(){
      let product = this.productRef.value;
      //console.log(product);
      this.pser.storeProductInfo(product).subscribe(result=>this.storeMsg=result,
        error=>console.log(error),
        ()=>this.getAllProductDetails());
        this.productRef.reset();
    }

    deleteProduct(pid:any){
      // console.log(pid);
      this.pser.deleteProductById(pid).subscribe(result=>this.deleteMsg=result,
        error=>console.log(error),()=>this.getAllProductDetails());
    }


    pid:number=0;
    url:string="";
    price:number=0.0;
    updateProduct(product:Product){
      console.log(product);
      this.flag=true;
      this.pid = product.pid;
      this.price = product.price;
      this.url = product.url;
    }

    updateRecordFromdb(){
      let product = {pid:this.pid,price:this.price,url:this.url};
      // console.log(product);
      this.pser.updateProduct(product).subscribe(result=>this.updateMsg=result,
        error=>console.log(error),()=>this.getAllProductDetails());
        this.flag=false;
    }

}
