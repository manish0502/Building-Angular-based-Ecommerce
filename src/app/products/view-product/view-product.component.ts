import { Product } from './../interfaces/product';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productId = 0;
  productDetails: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService :ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productId = data.id;
    })
    this.productsService.viewProduct(this.productId).subscribe(productData=>{
       this.productDetails = productData;
    })
  }

}
