import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable';

@Component({
  selector: 'app-home-owner',
  templateUrl: './home-owner.component.html',
  styleUrls: ['./home-owner.component.css']
})
export class HomeOwnerComponent implements OnInit {

  parkingLotStatus: any;

  constructor(private http: Http) {
    this.parkingLotStatus = 0;
  }


  getStatus(tags) {
    let status = 0;
    try {
      status = tags[0]['results'][0]['values'][0][1];
    } catch (e) {
    }
    return status;
  }

  ngOnInit() {
    const self = this;
    IntervalObservable.create(1000).subscribe(function () {
      const requestBody = {
        'start': '1h-ago',
        'tags': [
          {
            'name': 'WR-IDP-F24E:button',
            'order': 'desc',
            'limit': 1
          }
        ]
      };
      self.http.post('https://mmsanfranciscoteam-web-api.run.aws-usw02-pr.ice.predix.io/api/TimeSeries', requestBody).subscribe((response) => {
        self.parkingLotStatus = self.getStatus(response.json().tags);
      });
  });

  }

}
