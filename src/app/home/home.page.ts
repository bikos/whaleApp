import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { DataService} from '../services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public show = false;
  ngOnInit() {
    this.dataService.fetchData().then( data => {
      if (data) {
        this.show = true;
      }
    });
  }

  constructor(private dataService: DataService) {
  }

  ionViewWillEnter() {
    this.dataService.fetchData();

  }

}
