import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../interfaces/product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productId = 0;
  productDetails: Product;

  constructor(
    private activatedRoute:ActivatedRoute,
    private productsService :ProductsService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productId = data.id;
      
      // get the existing data of the product
      this.productsService.viewProduct(this.productId).subscribe(productData =>{
        this.productDetails= productData;
        console.log(this.productDetails);
      }) 
    })

  }
  updateProduct(form){
    console.log(form.value)

    const updateProduct = {

      id:form.value.id,
      categoryId: form.value.categoryId,
      productName: form.value.productName,
      description: form.value.description,
      rating: form.value.product_rating,
      price: form.value.product_price,
      productImg:'',
      isAvailable:1,
      color: form.value.product_color,
      reviews: form.value.product_category
    };
  
    this.productsService.updateProduct(this.productId ,updateProduct).subscribe(data=>{
      console.log(data);
    });

  }

}
