import { Component, OnInit, ViewChild } from '@angular/core';
import { CurrencyConverterPipe } from 'src/app/pipes/currency-converter.pipe';
import { CurrencyConverterService } from 'src/app/services/currency-converter.service';
import { HistoricalUnitsComponent } from 'src/app/shared/component/historical-units/historical-units.component';
import { HistoricalRates, ratesModel } from 'src/app/shared/models/rate.model';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss'],
  providers: [CurrencyConverterPipe],
})
export class CurrencyConverterComponent {
  public currencyVal: any;
  public ratesFromFixer!: ratesModel;
  public inputValueOne!: string;
  public inputValueTwo!: string;
  public currencyOne!: string;
  public currencyTwo!: string;
  public currencies!: Array<string>;
  public historicalUnitsArray!: Array<string>;

  public displayedColumns : string[] = ["key", "value"];
  public tableDataSource! : HistoricalRates[];
  @ViewChild(HistoricalUnitsComponent) updateHistoricalUnit! :  HistoricalUnitsComponent;

  constructor(public currencyConverterService: CurrencyConverterService,
    public currencyConverterPipe : CurrencyConverterPipe) {
    // this.getAllRates(); 
    this.historicalUnitsArray = [];
    this.tableDataSource = [];
  }

  ngAfterViewInit(){
    // this.updateHistoricalUnit.getHistoricalView();
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
    if (this.currencyOne != undefined && this.currencyTwo != undefined) {
      this.saveUnitHistory(this.currencyOne, this.currencyTwo);
      let arg = {
        targetCurrency: value == '1' ? this.currencyTwo : this.currencyOne,
        baseCurrency: value == '1' ? this.currencyOne : this.currencyTwo,
        rates: this.ratesFromFixer.rates,
        targetValue: this.inputValueTwo,
      };
      let inputValue = value == '1' ? this.inputValueOne : this.inputValueTwo;
      this.currencyVal = this.currencyConverterPipe.transform(
        inputValue,
        arg
      );2
      
     value !== '1' ? this.inputValueOne = this.currencyVal: this.inputValueTwo = this.currencyVal;
     this.updateHistoricalUnit.getHistoricalView()
      // console.log(this.currencyVal);
      // this.getHistoricalView();
    }
  }

  saveUnitHistory(targetCurrency: string, baseCurrency: string) {
    !this.historicalUnitsArray.includes(targetCurrency)
      ? this.historicalUnitsArray.push(targetCurrency)
      : null;
    !this.historicalUnitsArray.includes(baseCurrency)
      ? this.historicalUnitsArray.push(baseCurrency)
      : null;
  }


  currencyChange( value:any){
    value== "1"? this.inputValueOne = "" : this.inputValueTwo= "";
  }
}
