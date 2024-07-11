export class DataScrape {
  
        title: string;
        location: number;
        date: string;
        description:string;
        image_url:string;
      
        constructor(data: any) {
          this.title = data.title;
          this.location = data.location;
          this.date = data.date;
          this.description = data.description;
          this.image_url = data.image_url;
          this.date = data.email;

        }
      }

