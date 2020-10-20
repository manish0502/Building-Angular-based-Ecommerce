import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productsService: ProductsService){ }
  //msgTrue= false;

  ngOnInit(): void {
  }
  addNewProduct(form){
    console.log(form.value);

    let newProduct = {

      id:123,
      categoryId: form.value.product_category,
      productName: form.value.product_name,
      description: form.value.product_description,
      rating: form.value.product_rating,
      price: form.value.product_price,
      productImg:'',
      isAvailable:1,
      color: form.value.product_color,
      reviews: form.value.product_category
    };
    console.log(newProduct);
    this.productsService.createProduct(newProduct).subscribe(data=>{
      //this.msgTrue =true;
      console.log(data);
    })
    


  }
 
 
}
