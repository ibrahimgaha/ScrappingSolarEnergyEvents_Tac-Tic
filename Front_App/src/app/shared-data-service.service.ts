// shared-data.service.ts
import { Injectable } from '@angular/core';
import { DataScrape } from './data-scrape'; // Adjust the path

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private sharedData: DataScrape[] = [];

  setSharedData(dataItems: DataScrape[]) {
    this.sharedData = dataItems;
    console.log('Shared data set:', this.sharedData);
  }

  getSharedData() {
    return this.sharedData;
  }
}
