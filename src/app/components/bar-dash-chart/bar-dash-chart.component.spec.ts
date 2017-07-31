import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarDashChartComponent } from './bar-dash-chart.component';

describe('BarDashChartComponent', () => {
  let component: BarDashChartComponent;
  let fixture: ComponentFixture<BarDashChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarDashChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarDashChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
