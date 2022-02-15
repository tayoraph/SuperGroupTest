import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalUnitsComponent } from './historical-units.component';

describe('HistoricalUnitsComponent', () => {
  let component: HistoricalUnitsComponent;
  let fixture: ComponentFixture<HistoricalUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalUnitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
