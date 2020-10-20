import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders ,HttpParams } from '@angular/common/http'
import { Product } from '../interfaces/product'
import { Category } from '../interfaces/category'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpclient:HttpClient) { 

  }

  // @Get all products
  getAllProducts():Observable<Product>{
    const productUrl = 'http://localhost:3000/products';
    return this.httpclient.get<Product>(productUrl);

  }

  // @creating the products

  createProduct(productBody): Observable<Product>{
    const productUrl = 'http://localhost:3000/products';
    return this.httpclient.post<Product>(productUrl, productBody);

  }

  // @Viewing the products

  viewProduct(productId): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/' +productId;
    return this.httpclient.get<Product>(productUrl);

  }

  // @Update the product

  updateProduct(productId ,productBody): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/' +productId;
    return this.httpclient.put<Product>(productUrl, productBody);

  }

  // @Delete the Products

  deleteProduct(productId): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/' +productId;
    return this.httpclient.delete<Product>(productUrl);

  }

  // @Search By category

  searchCategoryProduct(categoryId): Observable<Product>{
    const productUrl = 'http://localhost:3000/products?categoryId='+categoryId;
    return this.httpclient.get<Product>(productUrl);

  }

  // @Search By Date

  searchDateProduct(dateParam): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/Date=' +dateParam;
    return this.httpclient.get<Product>(productUrl);

  }

  // @changing of sidebar
  getCategories():Observable<Category>{
    const categoriesUrl ='http://localhost:3000/categories';
    return this.httpclient.get<Category>(categoriesUrl);
  }

}
