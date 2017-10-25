import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
declare const $: any;

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit, AfterViewInit {

  markers: any[];

  ngAfterViewInit(): void {

    setInterval(function () {

      function myFunc() {
        console.log('hello');
      }

      const popupContent = $('.leaflet-popup-content');
      const button = $('#popup-button')
      if (popupContent.length > 0 && button.length === 0) {
        popupContent.append('<button class="btn btn-block btn-success" onclick="myFunc()" id="popup-button">Book</button>');
      }
    }, 500);
  }

  constructor(private http: Http) {
    this.http.get('assets/parking/locations.json').subscribe((response) => {
      const locations = response.json().content;
      this.markers = this.createMarkers(locations);
      console.log(this.markers);
    });
  }


  createMarkers(locations) {
    const markers = [];
    for (let i = 0; i < locations.length; i++) {
      const coordinates = this.extractLocations(locations[i].coordinates);
      const marker = {
        lat: coordinates[0],
        lng: coordinates[1],
        status: this.calculateStatus(locations[i])
      };
      markers.push(marker);
    }
    return markers;
  }

  extractLocations(coordinate) {
    const coordinates = coordinate.split(',')[0].split(':');
    return [coordinates[0], coordinates[1]];
  }

  ngOnInit() {
  }

  private calculateStatus(location: any) {
    if (location['pkInTimeStamp'] && location['pkOutTimeStamp']) {
      if (parseFloat(location['pkInTimeStamp']) > parseFloat(location['pkOutTimeStamp'])) {
        return 'TAKEN';
      }
    }
    return 'EMPTY';
  }
}
