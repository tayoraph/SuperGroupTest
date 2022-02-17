import { Component, OnInit } from '@angular/core';
import { CurrencyConverterPipe } from 'src/app/pipes/currency-converter.pipe';
import { CurrencyConverterService } from 'src/app/services/currency-converter.service';
import {
  lengthConverter,
  lengthConverterArray,
} from 'src/app/shared/models/length.model';

@Component({
  selector: 'app-length-unit-converter',
  templateUrl: './length-unit-converter.component.html',
  styleUrls: ['./length-unit-converter.component.scss'],
  providers: [CurrencyConverterPipe],
})
export class LengthUnitConverterComponent implements OnInit {
  public lengthArray = lengthConverterArray;
  public lengthRates = lengthConverter;
  public lenghtDataOne: string | undefined;
  public lenghtDataTwo: string  | undefined;
  public inputValueOne: string = '';
  public inputValueTwo: string = '';
  public lengthVal: any = '';
  public disabled : boolean = true;
  constructor(
    public currencyConverterPipe : CurrencyConverterPipe,
    public currencyConverterService: CurrencyConverterService
  ) { }

  ngOnInit(): void {}

  convertLength(value: string) {
    if (this.lenghtDataOne != undefined && this.lenghtDataTwo != undefined) {
      let arg = {
        targetCurrency: value == '1' ? this.lenghtDataTwo : this.lenghtDataOne,
        baseCurrency: value == '1' ? this.lenghtDataOne : this.lenghtDataTwo,
        rates: this.lengthRates,
        targetValue: this.inputValueTwo,
      };
      let inputValue = value == '1' ? this.inputValueOne : this.inputValueTwo;
      this.lengthVal = this.currencyConverterPipe.transform(
        inputValue,
        arg
      );
      value !== '1'
        ? (this.inputValueOne = this.lengthVal)
        : (this.inputValueTwo = this.lengthVal);
    }
  }

  currencyChange( value:any){
    this.inputValueOne = "";
    this.inputValueTwo= "";
    this.lenghtDataOne != undefined && this.lenghtDataTwo != undefined ? this.disabled = false : true;
    this.lengthVal = "";
  }
}
