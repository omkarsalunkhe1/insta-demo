import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data: any = [];
  counter = 1;
  records = 30;

  constructor(private httpService: HttpServiceService, private router: Router) {
    this.httpService.getFeeds(this.counter, this.records).subscribe((response: any) => {
        this.data = response.results;
    });
  }

  loadData(event) {
    console.log(event);
    this.counter += 1;
    this.httpService.getFeeds(this.counter, this.records).subscribe((response: any) => {
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

  openUserProfile() {
    this.router.navigate(['tabs/user-profile']);
  }

}
