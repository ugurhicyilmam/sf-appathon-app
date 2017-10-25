import {AfterViewInit, Component, OnInit} from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit, AfterViewInit {

  ngAfterViewInit(): void {
    setInterval(function () {
      const popupContent = $('.leaflet-popup-content');
      const button = $('#popup-button')
      if (popupContent.length > 0 && button.length === 0) {
        popupContent.append('<button class="btn btn-block btn-success" id="popup-button">Book</button>');
      }
    }, 500);
  }

  constructor() {
  }

  callthis() {
    console.log('this is called');
  }

  ngOnInit() {
  }
}
