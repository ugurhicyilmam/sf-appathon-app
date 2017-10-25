import {Injectable} from '@angular/core';
import {Headers, Http, Request, RequestMethod, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';


class TimesSeriesModel {
  tags: any[];
}

@Injectable()
export class PredixService {
  constructor(private http: Http) {
  }

  public getTimeseries(xdk): Observable<any> {

    const body = {
      start: '1y-ago',
      tags: [
        {
          name: ['xdk' + xdk + ':temperature', 'xdk' + xdk + ':humidity', 'xdk' + xdk + ':acceleration'],
          order: 'desc',
          limit: 1000
        }
      ]
    };
    return this.callService(body);
  }

  public getAggregation(xdk, agg): Observable<any> {

    const body = {
      start: '1y-ago',
      tags: [
        {
          name: ['xdk' + xdk + ':temperature', 'xdk' + xdk + ':humidity', 'xdk' + xdk + ':acceleration'],
          order: 'desc',
          aggregations: [{
            type: agg,
            sampling: {
              datapoints: 1,
            }
          }],
        }
      ]
    };
    return this.callService(body);
  }

  public callService(body) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const requestOptions = new RequestOptions({
      method: RequestMethod.Post,
      url: '/api/predix-timeseries/v1/datapoints',
      withCredentials: true,
      headers: headers,
      body: JSON.stringify(body)
    });
    return this.http.request(new Request(requestOptions))
      .map((res: Response) => {
        return <TimesSeriesModel> res.json();
      });
  }
}
