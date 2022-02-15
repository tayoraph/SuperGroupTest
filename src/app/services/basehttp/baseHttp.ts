import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import {map , retry } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export abstract class BaseHttpService {
  constructor(public httpClient: HttpClient) {
  }

  /***
   * @param url
   * @method get method
   * @response returns observable
   */
  public get<T>(url: string, value?: any): Observable<T> {
    return this.httpClient.get(url)
      .pipe(map((result: any) => {
        return result as T
      }), retry(2));
  }
}
