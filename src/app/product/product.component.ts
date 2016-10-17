import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Observable } from 'rxjs';

import  Product  from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ ProductService ],
})
export class ProductComponent implements OnInit {
  private showModal: boolean;

  private product: Observable<Product[]>;
  private productAttributes: Observable<Object>;
  private vendorDetails: Observable<Object>;

  constructor(private productService : ProductService, private router : Router) { }

  ngOnInit() {
    this.showModal = false;
    // let searchObj = {
    //   'productId': 4563463
    // }
    let productDetailStream = this.productService.getProductDetails().publish();
        productDetailStream.pluck('d').subscribe(
            (data:any) => {
              // console.log(data);
              this.product = data
              if(!this.product){
                this.router.navigate(['404']);
                // console.log("Default Router Active");
              }
            },
            (error: any) => console.error(error),
            () => console.log('completed')
        );
        productDetailStream.pluck('d', 'vendorDetails').subscribe(
            (data:any) => {
              // console.log(data);
              this.vendorDetails = data
            },
            (error: any) => console.error(error),
            () => console.log('completed')
        );
        productDetailStream.pluck('d', 'productAttributes').subscribe(
            (data:any) => {
              // console.log(data);
              this.productAttributes = data
            },
            (error: any) => console.error(error),
            () => console.log('completed')
        );
        productDetailStream.connect()
  }

}
