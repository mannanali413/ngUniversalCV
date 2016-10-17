import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response, Headers } from '@angular/http';

import { HttpClientService } from '../shared/services/http-client.service';
import  Product  from './product';

@Injectable ()
export class ProductService {
  private productDetailUrl= '1/public/catalog/productDetail?productId=3841947';

  constructor(private httpClient: HttpClientService){}

  getProductDetails(): Observable<Product[]>{
    console.log('test product servies')
    return this.httpClient.get(this.productDetailUrl, {})
              .map((r: Response) => r.json() as Product[])
              .catch((err) =>  {
                console.error(err)
                return Observable.of<Product[]>([]);
              });
  }
}
