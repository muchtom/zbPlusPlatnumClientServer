import { Injectable } from '@angular/core';
import { DefaultService } from './default.service';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService extends DefaultService<any>{

  constructor(httpClient: HttpClient) {
    super(httpClient, `v1/deal-note`);
  }
  getReport(url: string): Observable<string> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.defaultHttpClient.get(url, { observe: 'response', responseType: "text" })
      .pipe((map(response => response.body)));
  }

}
