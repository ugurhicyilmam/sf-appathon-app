import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
declare const $: any;

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit, AfterViewInit {

  locations: any[];

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
    this.http.get('')
  }

  ngOnInit() {
  }
}
