import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BulletComponent } from './components/bullet/bullet.component';
import { BarDashChartComponent } from './components/bar-dash-chart/bar-dash-chart.component';
import { DataService } from 'app/service/data.service';

@NgModule({
  declarations: [
    AppComponent,
    BulletComponent,
    BarDashChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
