import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseHttpService } from './basehttp/baseHttp';
@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {

  constructor(public baseHttp : BaseHttpService) { }

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

     getHistoricalView(historicalUnitsArray:Array<string>) {
     
       debugger
      let connect = environment.baseUrl +  environment.currentDate + environment.accessKey +"&symbols="+historicalUnitsArray;
      return this.baseHttp.get(connect);
    }
    
}
