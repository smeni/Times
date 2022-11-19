import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { clock } from 'src/helper/dto';

@Injectable({
  providedIn: 'root',
})
export class TimesService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<clock[]>('assets/data.json');
  }
}
