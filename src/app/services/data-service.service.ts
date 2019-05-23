import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = 'https://mkr.tools/api/v1/cdps';
  public dataArray: any = {};
  public dispData: any = [];


  constructor(private http: HttpClient) { }


  public fetchData() {
    const mainApi = 'cdps';
    return new Promise ((resolve, reject) => {
      this.http.get(this.baseUrl).subscribe(data => {
        this.dispData = [];
        this.dataArray.totalData = _.orderBy(data, ['ink'], ['desc']);
        this.dataArray.top10 = _.take(this.dataArray.totalData, 10);
        this.dataArray.top50 = _.take(this.dataArray.totalData, 50);
        this.dataArray.top100 = _.take(this.dataArray.totalData, 100);
        this.dataArray.top1000 = _.take(this.dataArray.totalData, 1000);
        this.dataArray.top2000 = _.take(this.dataArray.totalData, 2000);
        this.calcStuff('Top 10', this.dataArray.top10);
        this.calcStuff('Top 50', this.dataArray.top50);
        this.calcStuff('Top 100', this.dataArray.top100);
        this.calcStuff('Top 1000', this.dataArray.top1000);
        this.calcStuff('Top 2000', this.dataArray.top2000);
        resolve(true);
      },
      err => {
          reject(err);
      });
    });
  }

  private calcStuff(tname, array) {
    const retObj: any = {
      name: tname,
      topEth: _.first(array).ink.toFixed(0),
      lastEth: _.last(array).ink.toFixed(0),
      averageEth: _.meanBy(array, 'ink').toFixed(0),
      averageColRatio: _.meanBy(array, 'ratio').toFixed(0),
      averageLiq: _.meanBy(array, 'liq_price').toFixed(0),
      averageColAmt: _.meanBy(array, 'art').toFixed(0)
    };
    this.dispData.push(retObj);
  }

  public getBarLiquidData() {
    const dataArr: any = [];
    dataArr.push(_.meanBy(this.dataArray.top10, 'liq_price').toFixed(0));
    dataArr.push(_.meanBy(this.dataArray.top50, 'liq_price').toFixed(0));
    dataArr.push(_.meanBy(this.dataArray.top100, 'liq_price').toFixed(0));
    dataArr.push(_.meanBy(this.dataArray.top1000, 'liq_price').toFixed(0));
    dataArr.push(_.meanBy(this.dataArray.top2000, 'liq_price').toFixed(0));
    return dataArr;
  }


}
