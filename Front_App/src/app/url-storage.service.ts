import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlStorageService {
  private urls: { url: string; lastClicked: Date }[] = [];

  addUrl(url: string) {
    if (!this.urls.some(item => item.url === url)) {
      this.urls.push({ url, lastClicked: null });
    }
  }

  urlExists(url: string): boolean {
    return this.urls.some(item => item.url === url);
  }

  setLastClicked(url: string, timestamp: Date) {
    const foundUrl = this.urls.find(item => item.url === url);
    if (foundUrl) {
      foundUrl.lastClicked = timestamp;
    }
  }

  getLastClicked(url: string): Date | null {
    const foundUrl = this.urls.find(item => item.url === url);
    return foundUrl ? foundUrl.lastClicked : null;
  }

  getUrls(): { url: string; lastClicked: Date }[] {
    return this.urls;
  }
}
