import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter',
})
export class CurrencyConverterPipe implements PipeTransform {
  public rates!: any;
  public rateArray: Array<string>;
  public selectedBaseIndex: number;
  public selectedTargetIndex: number;
  public selected: number;
  public selectedBase: number;
  public selectedTarget: number;
  constructor() {
    this.rateArray = [];
    this.selectedBaseIndex = 0;
    this.selectedTargetIndex = 0;
    this.selected = 0;
    this.selectedBase = 0;
    this.selectedTarget = 0;
  }

  transform(value: any, args: any): any {
    this.rates = args.rates;
    this.rateArray = Object.keys(this.rates);
    this.selectedBaseIndex = this.rateArray.indexOf(args.baseCurrency);
    this.selectedBase =
      this.rates[Object.keys(this.rates)[this.selectedBaseIndex]];
    this.selectedTargetIndex = this.rateArray.indexOf(args.targetCurrency);
    this.selected = this.rates[Object.keys(this.rates)[this.selectedBaseIndex]];
    let selected2 =
      this.rates[Object.keys(this.rates)[this.selectedTargetIndex]];
    let resp = ((selected2 / this.selected) * value).toFixed(4);
    return resp;
  }
}
