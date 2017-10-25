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
import { DriverHistoryComponent } from './driver-history/driver-history.component';
import { ParkManagerInspectComponent } from './park-manager-inspect/park-manager-inspect.component';
import {ArrayToStringPipe} from './pipes/arrayToString.pipe';
import {IntToStrPipe} from './pipes/intToStr.pipe';
import { HomeOwnerComponent } from './home-owner/home-owner.component';

const routes = [
  {
    path: 'driver',
    component: DriverComponent
  },
  {
    path: 'driver-history',
    component: DriverHistoryComponent
  },
  {
    path: 'park-manager',
    component: ParkManagerComponent
  },
  {
    path: 'park-manager-inspect',
    component: ParkManagerInspectComponent
  },
  {
    path: 'resource-manager',
    component: ResourceManagerComponent
  },
  {
    path: '',
    component: HomeOwnerComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DriverComponent,
    ResourceManagerComponent,
    ParkManagerComponent,
    DriverHistoryComponent,
    ParkManagerInspectComponent,
    ArrayToStringPipe,
    IntToStrPipe,
    HomeOwnerComponent
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
