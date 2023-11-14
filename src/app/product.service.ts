import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
   
  private baseURL ="http://localhost:8080/api/v1/getProduct";
  private CreateProduct = "http://localhost:8080/api/v1/saveProduct";
  private DeleteProduct = "http://localhost:8080/api/v1/deleteProduct";
  private UpdateProduct = "http://localhost:8080/api/v1/editProduct";
  private GetProductById = "http://localhost:8080/api/v1";
  constructor(private HttpClient: HttpClient) { }
  getProductsList(): Observable<Product[]>{
    return this.HttpClient.get<Product[]>(`${this.baseURL}`);
  }

  getProductById(id: number): Observable<Product>{
    return this.HttpClient.get<Product>(`${this.GetProductById}/${id}`);
  }
  createProduct(product: Product):Observable<object>{
    return this.HttpClient.post(`${this.CreateProduct}`, product);

  }
  deleteProduct(id: number):Observable<object>{
    return this.HttpClient.delete(`${this.DeleteProduct}/${id}`);
  }
  UpdateProducts(id: number, product: Product): Observable<object>{
    return this.HttpClient.put(`${this.UpdateProduct}/${id}`,product);
  }
}
