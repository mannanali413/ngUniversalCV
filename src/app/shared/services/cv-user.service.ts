import { Injectable } from '@angular/core';

import { HttpClientService } from './http-client.service';

@Injectable()
export class CvUserService {
  private hostURL: string = 'securestatic.craftsvilla.com/'

  constructor(private httpClient: HttpClientService) { }

  private getLogin(emailId: string, password: string) {
        return this.httpClient.post('checkoutService/index/getLogin', {
          "emailId": emailId,
          "password": password
        }, this.hostURL)
  }

  private forgotPassword(emailId: string) {
    return this.httpClient.post('checkoutService/index/forgotPassword', {
      "emailId": emailId
    }, this.hostURL);
  }

  private continueAsGuest(emailId: string) {
    return this.httpClient.post('checkoutService/index/continueAsGuest', {
      "customerEmail": emailId
    }, this.hostURL);
  }

  private socialAuth(json: Object) {
    return this.httpClient.post('checkoutService/index/socialLogin', json, this.hostURL);
  }

}
