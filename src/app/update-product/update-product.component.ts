import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  id: number;
  product: Product = new Product();
  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void{
    this.id = this.route.snapshot.params['id'];
   this.productService.getProductById(this.id).subscribe(data => {
   this.product = data;
 }, error => console.log(error));
  }
  saveProduct(id:number){
    this.productService.UpdateProducts(id,this.product).subscribe(data =>{
      console.log(data);
      this.goToProductList();
    },
    error => console.log(error));
  }



 goToProductList(){
  this.router.navigate(['/products']);
 }

  onSubmit(){
    console.log(this.product);
    this.saveProduct(this.id);
    
  }
}
