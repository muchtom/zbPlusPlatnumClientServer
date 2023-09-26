import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ApiService } from 'src/app/shared/shared/services';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  public chart: any;
  public productData: any[] = [];

  constructor(private httpClient: HttpClient, private service: ApiService) {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.fetchProductData();
  }

  fetchProductData() {
    this.service.getFromUrl(`product-delivery-totals`)
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
            label: "Amount In Stock(Kilograms)",
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
