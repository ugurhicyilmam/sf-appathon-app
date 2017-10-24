import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DriverComponent} from './driver/driver.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { ResourceManagerComponent } from './resource-manager/resource-manager.component';
import { ParkManagerComponent } from './park-manager/park-manager.component';

const routes = [
  {
    path: 'driver',
    component: DriverComponent
  },
  {
    path: 'park-manager',
    component: ParkManagerComponent
  },
  {
    path: 'resource-manager',
    component: ResourceManagerComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DriverComponent,
    ResourceManagerComponent,
    ParkManagerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule {
}
