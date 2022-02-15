import { Component, OnInit } from '@angular/core';
import { HistoricalRates } from '../../models/rate.model';

@Component({
  selector: 'app-historical-units',
  templateUrl: './historical-units.component.html',
  styleUrls: ['./historical-units.component.scss']
})
export class HistoricalUnitsComponent implements OnInit {
  public displayedColumns : string[] = ["key", "value"];
  public tableDataSource! : HistoricalRates[];
  public orderByKey(a:any, b:any) {
    return a.key;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
