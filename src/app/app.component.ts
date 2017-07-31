import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  ranges: number[] = [250, 230, 210, 90];
  actual: number[] = [200];
  target: number[] = [193];
  colors: any[] = ['lightgrey', 'orange', 'green'];
  height: number = 40;
  xlabels: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  bardata: number[] = [200, 100, 234, 123, 345, 150, 120];
  dashdata: number[] = [100, 100, 254, 123, 55, 100, 190];

  constructor(private dataService: DataService){

  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.dataService.fetchData();
  }




}
