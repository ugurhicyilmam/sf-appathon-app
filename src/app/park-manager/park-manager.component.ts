import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
declare const $: any;

@Component({
  selector: 'app-park-manager',
  templateUrl: './park-manager.component.html',
  styleUrls: ['./park-manager.component.css']
})
export class ParkManagerComponent implements OnInit, AfterViewInit {

  markers: any[];

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

  ngAfterViewInit(): void {
    setInterval(function () {
      const popupContent = $('.leaflet-popup-content');
      const button = $('#popup-button')
      if (popupContent.length > 0 && button.length === 0) {
        popupContent.append('<a class="btn btn-block btn-primary" href="#/park-manager-inspect" id="popup-button" style="color:white">Inspect Details</a>');
      }
    }, 500);
  }

}
