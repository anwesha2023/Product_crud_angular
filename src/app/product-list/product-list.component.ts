import { Component,OnInit } from '@angular/core';
import {Product} from '../product'
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

 constructor(private productService: ProductService,
  private router: Router) { }

 ngOnInit(): void{
   this.getProducts();
 }

 private getProducts(){
  console.log("inside product function");
  this.productService.getProductsList().subscribe(data => {
    this.products = data;
  });
  console.log(this.products);
 }
 deleteProducts(id: number){
  this.productService.deleteProduct(id).subscribe(data => {
    console.log(data);
    this.getProducts();
  })
 }
 updateProduct(id: number){
  this.router.navigate(['update-product',id]);

}

 
}
