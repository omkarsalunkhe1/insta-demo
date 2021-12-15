import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  records = 50;
  counter = 1;
  data: any = [];

  constructor(private httpService: HttpServiceService) {
    this.httpService.getFeeds(this.counter, this.records).subscribe((response: any) => {
      this.data = response.results;
    });
  }

  ngOnInit() {}

}
