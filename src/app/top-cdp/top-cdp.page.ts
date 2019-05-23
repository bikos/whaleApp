import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-top-cdp',
  templateUrl: './top-cdp.page.html',
  styleUrls: ['./top-cdp.page.scss'],
})
export class TopCdpPage implements OnInit {

  public totalData: any = {};
  public topData: any = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.topData = []; // wipe for new collection
    this.topData = this.dataService.dispData;
    //
  }

}
