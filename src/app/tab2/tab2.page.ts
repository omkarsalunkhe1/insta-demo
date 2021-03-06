import { Component } from '@angular/core';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  records = 100;
  counter = 1;
  data: any = [];

  constructor(private httpService: HttpServiceService) {
    this.httpService.getFeeds(this.counter, this.records).subscribe((response: any) => {
      this.data = response.results;
    });
  }

}
