import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedDataService } from '../shared-data-service.service';
import { DataScrape } from '../data-scrape';
import { MatDateRangePicker } from '@angular/material/datepicker';
import { DateRange } from '@angular/material/datepicker';





@Component({
  selector: 'app-display-table-data',
  templateUrl: './display-table-data.component.html',
  styleUrls: ['./display-table-data.component.css']
})

export class DisplayDataComponent implements OnInit {
  dataItems: DataScrape[] = [];
  filterText: string = '';
  titleFilter: string='';
  filteredData: DataScrape[] = [];
  startDate: Date | null = null;
  endDate: Date | null = null;


  @ViewChild('picker') picker!: MatDateRangePicker<Date>;


  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.dataItems = this.sharedDataService.getSharedData();
    this.filteredData = this.dataItems[0][0].events;
    this.applyFilters();
  }



  applyFilters() {
    this.filteredData = this.dataItems[0][0].events.filter(item => {
      const eventDate = new Date(item.date);
      const titleMatches = item.title.toLowerCase().includes(this.titleFilter.toLowerCase());
      const dateInRange = (!this.startDate || !this.endDate) ||
                          (eventDate >= this.startDate! && eventDate <= this.endDate!);
  
      return titleMatches && dateInRange;
    });
  }
  
  applyDateRangeFilter() {
    if (this.startDate && this.endDate) {
      this.filteredData = this.dataItems[0][0].events.filter(item => {
        const eventDate = new Date(item.date);
        return eventDate >= this.startDate! && eventDate <= this.endDate!;
      });
    } else {
      // Reset the filter if no date range is selected
      this.filteredData = this.dataItems[0][0].events;
      this.applyFilters();
    }
  }
  
  
  
    

}
