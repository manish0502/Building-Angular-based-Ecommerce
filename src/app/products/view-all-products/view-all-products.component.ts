import { ProductsService } from './../services/products.service';
import { ProductsRoutingModule } from './../products-routing.module';
import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product'

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {
  productList: Product;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(data =>{
      this.productList = data;
    })
  }

}
