import {AfterViewInit, Component, OnInit} from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-park-manager',
  templateUrl: './park-manager.component.html',
  styleUrls: ['./park-manager.component.css']
})
export class ParkManagerComponent implements OnInit, AfterViewInit {

  constructor() {
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

  ngOnInit() {
  }

}
