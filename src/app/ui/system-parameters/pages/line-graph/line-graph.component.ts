import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CanvasJS } from '@canvasjs/angular-charts';
import { Chart, registerables } from 'chart.js';
import { ApiService } from 'src/app/shared/shared/services';

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss']
})
export class LineGraphComponent implements OnInit {
  public chart: any;
  public productData: any[] = [];

  constructor(private httpClient: HttpClient, private service: ApiService) {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.fetchProductData();
  }

  fetchProductData() {
    // this.httpClient.get<any[]>('http://localhost:8050/butchery/product-sale-totals')
    this.service.getFromUrl(`product-sale-totals`)
      .subscribe(data => {
        this.productData = data;
        this.createChart();
      });
  }

  createChart() {
    const labels = this.productData.map(item => item.name);
    const counts = this.productData.map(item => item.count);

    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: "Amount In Sold(USD)",
            data: counts,
            backgroundColor: 'blue'
          },
        ]
      },
      options: {
        aspectRatio: 2.2
      }
    });
  }

}
