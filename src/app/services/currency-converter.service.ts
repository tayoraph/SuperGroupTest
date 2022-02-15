import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseHttpService } from './basehttp/baseHttp';
@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {

  constructor(public baseHttp : BaseHttpService) {
  
   }

   /**
   * 
   * @returns object of currencies
   */
    getCurrencyRates() {
      let connect = environment.baseUrl +  environment.latest + environment.accessKey;
      return this.baseHttp.get(connect);
    }

     /**
      * 
      * @todo get historical view
      */

     getHistoricalView(symbols?:[]) {
      let connect = environment.baseUrl +  environment.currentDate + environment.accessKey +"&symbols=USD,AUD,CAD,PLN,MXN";
      return this.baseHttp.get(connect);
    }
    
}
