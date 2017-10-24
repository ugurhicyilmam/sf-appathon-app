import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data: any;

  constructor() {
    this.data = {
      gauge2Perc: 65,
      gauge2Value: 63,
      gauge2Unit: 'KW',
      gauge2ChartData: []
    };
  }
}
