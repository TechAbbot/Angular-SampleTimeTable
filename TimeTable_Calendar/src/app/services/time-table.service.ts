import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeTableService {

  constructor(private http: HttpClient) { }

  // Get data from external file
  getData(): Observable<any> {
    return this.http.get<any>('assets/storage/time-table-data.json');
  }
}
