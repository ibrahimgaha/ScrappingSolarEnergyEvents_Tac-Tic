import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataScrape } from './data-scrape'; 

@Injectable({
  providedIn: 'root',
})
export class SurveillerUrlService {
  constructor(private http: HttpClient) {}

  scrapeData(): Observable<DataScrape[]> {
    return this.http.get<DataScrape[]>('http://localhost:8000/scrape/');
  }
}
