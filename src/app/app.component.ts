import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  ranges: number[] = [250, 230, 210, 190];
  actual: number[] = [200];
  target: number[] = [193];
  colors: any[] = ['lightgrey', 'orange', 'green'];
  height: number = 40;
}
