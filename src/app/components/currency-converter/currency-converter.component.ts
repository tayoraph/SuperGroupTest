import { Component, OnInit } from '@angular/core';
import { CurrencyConverterPipe } from 'src/app/pipes/currency-converter.pipe';
import { CurrencyConverterService } from 'src/app/services/currency-converter.service';
import { HistoricalRates, ratesModel } from 'src/app/shared/models/rate.model';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss'],
  providers: [CurrencyConverterPipe],
})
export class CurrencyConverterComponent {
  title = 'Sample Currency Converter';
  // currentVal: any;
  // unit!: string;
  // value = 500;
  currencyVal: any;
  ratesFromFixer!: ratesModel;
  // public baseCurrency: any;
  // public targetCurrency: any;
  public inputValueOne!: string;
  public inputValueTwo!: string;
  public currency1!: string;
  public currency2!: string;
  public currencies!: Array<string>;
  public HistoricalUnitsArray!: Array<string>;




  public displayedColumns : string[] = ["key", "value"];
  public tableDataSource! : HistoricalRates[];
  public orderByKey(a:any, b:any) {
    return a.key;
  }

  constructor(public currencyConverterService: CurrencyConverterService,
    public currencyConverterPipe : CurrencyConverterPipe) {
    // this.getHistoricalView();
    // this.getAllRates();
    
    this.currencyVal = {};
    this.HistoricalUnitsArray = [];
    this.tableDataSource = [];
  }

  getAllRates() {
    this.currencyConverterService.getCurrencyRates().subscribe((res: any) => {
      this.ratesFromFixer = res;
      this.currencies = Object.keys(this.ratesFromFixer.rates);
    });
  }


  /**
   * @todo converts currency
   * @param value 
   */
  convertCurrency(value: string) {
    if (this.currency1 != undefined && this.currency2 != undefined) {
      this.saveUnitHistory(this.currency1, this.currency2);
      let arg = {
        targetCurrency: value == '1' ? this.currency2 : this.currency1,
        baseCurrency: value == '1' ? this.currency1 : this.currency2,
        rates: this.ratesFromFixer.rates,
        targetValue: this.inputValueTwo,
      };
      let inputValue = value == '1' ? this.inputValueOne : this.inputValueTwo;
      this.currencyVal = this.currencyConverterPipe.transform(
        inputValue,
        arg
      );
      
     value !== '1' ? this.inputValueOne = this.currencyVal: this.inputValueTwo = this.currencyVal;

      // console.log(this.currencyVal);
      // this.getHistoricalView();
    }
  }

  saveUnitHistory(targetCurrency: string, baseCurrency: string) {
    !this.HistoricalUnitsArray.includes(targetCurrency)
      ? this.HistoricalUnitsArray.push(targetCurrency)
      : null;
    !this.HistoricalUnitsArray.includes(baseCurrency)
      ? this.HistoricalUnitsArray.push(baseCurrency)
      : null;
  }

  /**
   * @todo get historical view
   */
  getHistoricalView() {
    this.currencyConverterService.getHistoricalView().subscribe((res: any) => {
      this.tableDataSource = res.rates;
      console.log( this.tableDataSource);
    });
  }
}
