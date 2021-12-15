import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  data: any = [];
  counter = 1;

  constructor(private httpService: HttpServiceService) {
    this.httpService.getFeeds(this.counter).subscribe((response: any) => {
        this.data = response.results;
    });
  }

  loadData(event) {
    this.counter += 1;
    this.httpService.getFeeds(this.counter).subscribe((response: any) => {
      this.data = this.data.concat(response.results);
    });
  }

  addLikes(index: number) {
    if(this.data[index].likes) {
      this.data[index].likes += 1;
    } else {
      this.data[index].likes = 1;
    }
  }

}
