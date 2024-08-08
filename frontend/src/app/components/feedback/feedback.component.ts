import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import { FeedbackService } from "../../feedback.service";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit, AfterViewInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(
    private feedbackService: FeedbackService,
    private cdr: ChangeDetectorRef
  ) {
    this.chartOptions = {
      series: [],
      chart: {
        width: 380,
        type: 'pie'
      },
      labels: [],
      responsive: [{
        breakpoint: 1000,
        options: {
          chart: {
            width: '100%'
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };
  }

  ngOnInit(): void {
    this.loadChartData();
  }

  ngAfterViewInit(): void {
    // If the data is already loaded, refresh the chart
    if (this.chartOptions.series.length) {
      this.updateChart();
    }
  }

  loadChartData(): void {
    this.feedbackService.getAverageEffectivenessRating().subscribe((effectivenessRating: number) => {
      this.feedbackService.getAverageKnowledgeRating().subscribe(
        (knowledgeRating: number) => {
          this.feedbackService.getAverageEngagementRating().subscribe(
            (engagementRating: number) => {
              this.feedbackService.getAverageClarityRating().subscribe(
                (clarityRating: number) => {
                  this.feedbackService.getAverageResponsivenessRating().subscribe(
                    (responsivenessRating: number) => {
                      this.chartOptions.series = [
                        effectivenessRating,
                        knowledgeRating,
                        engagementRating,
                        clarityRating,
                        responsivenessRating
                      ];
                      this.chartOptions.labels = [
                        'Effectiveness',
                        'Knowledge',
                        'Engagement',
                        'Clarity',
                        'Responsiveness'
                      ];
                      // Manually detect changes
                      this.cdr.detectChanges();
                      this.updateChart();
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  }

  updateChart(): void {
    // Use the chart instance to update chart options
    if (this.chart && this.chartOptions.series.length) {
      this.chart.updateOptions({
        series: this.chartOptions.series,
        labels: this.chartOptions.labels,
      });
    }
  }
}
