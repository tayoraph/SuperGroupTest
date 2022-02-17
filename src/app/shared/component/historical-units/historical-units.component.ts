import { Component, Input, OnInit } from '@angular/core';
import { CurrencyConverterService } from 'src/app/services/currency-converter.service';
import { HistoricalRates } from '../../models/rate.model';

@Component({
  selector: 'app-historical-units',
  templateUrl: './historical-units.component.html',
  styleUrls: ['./historical-units.component.scss']
})
export class HistoricalUnitsComponent implements OnInit {
  public displayedColumns : string[] = ["sn","key", "value"];
  public tableDataSource! : HistoricalRates[];
  public orderByKey(a:any, b:any) {
    return a.key;
  }
  public totalLength : number = 0
  @Input() historicalUnitsArray : Array<string> =[];
  constructor(public currencyConverterService: CurrencyConverterService) {
    this.tableDataSource = [];
    // this.getHistoricalView();
   }

  ngOnInit(): void {
  }

    /**
   * @todo get historical view
   */
     getHistoricalView() {
       debugger
      this.currencyConverterService.getHistoricalView(this.historicalUnitsArray).subscribe((res: any) => {
        this.tableDataSource = res.rates;
        this.totalLength = Object.keys(this.tableDataSource).length
      });
    }
  

}
