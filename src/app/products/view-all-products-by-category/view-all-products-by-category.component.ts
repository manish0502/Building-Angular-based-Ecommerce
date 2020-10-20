import { Product } from './../interfaces/product';
import { ProductsService } from './../services/products.service';
import { Category } from './../interfaces/category';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-all-products-by-category',
  templateUrl: './view-all-products-by-category.component.html',
  styleUrls: ['./view-all-products-by-category.component.css']
})
export class ViewAllProductsByCategoryComponent implements OnInit {
  
  searchCategory :Category;
  productList : Product

  constructor(private activatedRoute : ActivatedRoute,
    private productsService : ProductsService) { }

    
    ngOnInit(): void {
      this.activatedRoute.params.subscribe(data=>{
        this.searchCategory=data.id;
        console.log(this.searchCategory)

        this.productsService.searchCategoryProduct( this.searchCategory).subscribe(categorydata =>{
          this.productList=categorydata;
        })
      })
  }

}
