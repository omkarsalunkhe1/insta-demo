import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  getFeeds(counter: number, records: number) {
    return this.http.get('https://randomuser.me/api/?page=' + counter + '&results='+records+'&seed=abc');
  }
}
