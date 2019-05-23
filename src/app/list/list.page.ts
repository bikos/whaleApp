import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { DataService } from '../services/data-service.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  @ViewChild('barCanvas') barCanvas: ElementRef;

  barChart: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }

ionViewWillEnter() {

    const barData = this.dataService.getBarLiquidData();

    this.barChart = new Chart(this.barCanvas.nativeElement, {
    type: 'bar',
    data: {
        labels: ['top10', 'top50', 'top100', 'top1k', 'top2k'],
        datasets: [{
            label: 'Liquid Price',
            data: barData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

});
}

}
