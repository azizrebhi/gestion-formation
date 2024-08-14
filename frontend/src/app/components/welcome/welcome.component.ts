import { Component, ViewChild, OnInit } from "@angular/core";
import { PollService } from "../../poll.service";
import { Poll } from "../../poll.model";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexXAxis,
  ApexPlotOptions,
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
  colors: string[];
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
};

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>[] = [];
  polls: Poll[] = [];

  constructor(private pollService: PollService) { }

  ngOnInit() {
    this.pollService.getPolls().subscribe(polls => {
      this.polls = polls;
      this.polls.forEach((poll, index) => {
        const chartData: number[] = poll.options.map(option => +option.score);
        const categories: string[] = poll.options.map(option => String(option.option));
        const colors = [
          "#00bf6f", "#507cb6", "#d4526e", "#13d8aa", "#A5978B",
          "#2b908f", "#f9a3a4", "#90ee7e", "#f48024", "#69d2e7"
        ];

        this.chartOptions.push({
          series: [
            {
              data: chartData
            }
          ],
          chart: {
            type: "bar",
            height: 380
          },
          plotOptions: {
            bar: {
              barHeight: "50%",
              distributed: true,
              horizontal: true,
              dataLabels: {
                position: "bottom"
              }
            }
          },
          colors: colors.slice(0, poll.options.length), // Ensure the colors array matches the number of options
          dataLabels: {
            enabled: true,
            textAnchor: "start",
            style: {
              colors: ["#fff"]
            },
            formatter: function(val, opt) {
              return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
            },
            offsetX: 0,
            dropShadow: {
              enabled: true
            }
          },
          stroke: {
            width: 1,
            colors: ["#fff"]
          },
          xaxis: {
            categories: categories
          },
          yaxis: {
            labels: {
              show: false
            }
          },
          title: {
            text: "Custom DataLabels",
            align: "center",
            floating: true
          },
          subtitle: {
            text: "Category Names as DataLabels inside bars",
            align: "center"
          },
          tooltip: {
            theme: "dark",
            x: {
              show: false
            },
            y: {
              title: {
                formatter: function() {
                  return "";
                }
              }
            }
          }
        });
      });
    }, error => {
      console.log(error);
    });
  }
}
