import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SurveillerUrlService } from '../service-name.service';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SharedDataService } from '../shared-data-service.service'; // Adjust the path
import { Router } from '@angular/router';
import { UrlStorageService } from '../url-storage.service';

@Component({
  selector: 'app-surveiller-url',
  templateUrl: './surveiller-url.component.html',
  styleUrls: ['./surveiller-url.component.css']
})
export class SurveillerUrlComponent {
  f_url : FormGroup;
  data:any;
  constructor(private fbs:FormBuilder,private surveillerUrlService: SurveillerUrlService,private sharedDataService: SharedDataService,private router:Router,private urlStorageService: UrlStorageService){

  }
  ngOnInit(): void {
       this.f_url=this.fbs.group({
        name_url:[''],
        
       })
     }

     
     fetchData() {
      const targetUrl = "https://www.solarpowereurope.org/events/";
      const inputUrl = this.f_url.get("name_url").value;
    
      if (inputUrl === targetUrl) {
        this.surveillerUrlService.scrapeData()
          .pipe(
            catchError((error) => {
              console.error('Error fetching data:', error);
              return throwError(error);
            })
          )
          .subscribe((response) => {
            this.data = [response];
            this.sharedDataService.setSharedData([this.data]); // Store the fetched data
            this.router.navigate(['Display_Data']); // Navigate after data is stored
            console.log([this.data]);

          });

          if (!this.urlStorageService.urlExists(inputUrl)) {
            this.urlStorageService.addUrl(inputUrl);
          }
      
          const currentTime = new Date();
          this.urlStorageService.setLastClicked(inputUrl, currentTime);



      } else {
        alert("Please Enter a valid URL");
      }
      this.urlStorageService.addUrl(inputUrl);
    }
  
    
}






