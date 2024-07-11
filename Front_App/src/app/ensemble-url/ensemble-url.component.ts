import { Component } from '@angular/core';
import { UrlStorageService } from '../url-storage.service';
@Component({
  selector: 'app-ensemble-url',
  templateUrl: './ensemble-url.component.html',
  styleUrls: ['./ensemble-url.component.css']
})
export class EnsembleUrlComponent {

  urls: { url: string; lastClicked: Date }[] = [];

  
  constructor(private urlStorageService: UrlStorageService) {
    this.urls = this.urlStorageService.getUrls();
  }

  getLastClickedText(url: string): string {
    const lastClicked = this.urlStorageService.getLastClicked(url);
    if (lastClicked) {
      return `Last clicked: ${lastClicked.toLocaleString()}`;
    }
    return 'Not clicked yet';
  }
}
