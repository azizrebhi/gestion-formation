import { Component, ViewChild, OnInit } from "@angular/core";
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
import { Poll } from "../../../../poll.modes";
import { PollService } from "../../../../Poll.service";

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
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: ChartOptions[] = [];
  polls: Poll[] = [];
  public percentages: number[][] = [];
  public categoryStatistics: { [key: string]: { sum: number, average: number, count: number } } = {};
  constructor(private pollService: PollService) {}
  ngOnInit() {
    console.log("hello");
    this.pollService.getPolls().subscribe(polls => {
      this.polls = polls;
      this.chartOptions = [];
      this.categoryStatistics = {};
      this.polls.forEach((poll, index) => {
        const totalVotes = poll.options.reduce((sum, option) => sum + option.score, 0);
        const chartData: number[] = poll.options.map(option => (totalVotes === 0 ? 0 : (option.score / totalVotes) * 100));
        const categories: string[] = poll.options.map(option => option.option);
        const colors = [
          "#00bf6f", "#507cb6", "#d4526e", "#13d8aa", "#A5978B",
          "#2b908f", "#f9a3a4", "#90ee7e", "#f48024", "#69d2e7"
        ];

        this.percentages[index] = chartData;

        const category = poll.categorie;
        if (!this.categoryStatistics[category]) {
          this.categoryStatistics[category] = { sum: 0, average: 0, count: 0 };
        }

        const pollAveragePercentage = chartData.reduce((sum, percent) => sum + percent, 0) / chartData.length;
        this.categoryStatistics[category].sum += pollAveragePercentage;
        this.categoryStatistics[category].count += 1;

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
          colors: colors.slice(0, poll.options.length),
          dataLabels: {
            enabled: true,
            textAnchor: "start",
            style: {
              colors: ["#fff"]
            },
            formatter: function(val: number, opt) {
              return opt.w.globals.labels[opt.dataPointIndex] + ":  " + Number(val).toFixed(2) + "%";
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
            text: "Poll Results",
            align: "center",
            floating: true
          },
          subtitle: {
            text: "Percentage of Votes",
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
              },
              formatter: function(val: number) {
                return Number(val).toFixed(2) + "%";
              }
            }
          }
        });
      });

      for (let category in this.categoryStatistics) {
        this.categoryStatistics[category].average = this.categoryStatistics[category].sum / this.categoryStatistics[category].count;
      }
    }, error => {
      console.log(error);
    });
  }
}
