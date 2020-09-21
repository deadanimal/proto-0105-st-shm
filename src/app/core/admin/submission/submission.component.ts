import { Component, OnInit, OnDestroy, NgZone, TemplateRef } from '@angular/core';
import { User } from 'src/assets/mock/admin-user/users.model'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);
import { MocksService } from 'src/app/shared/services/mocks/mocks.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss']
})
export class SubmissionComponent implements OnInit {

  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: User[] = []
  SelectionType = SelectionType;

  chart: any
  chart1: any
  chart2: any
  chart3: any
  dataChart: any[] = []
  dataChart2: any[] = []
  dataChart3: any[] = []

  constructor(
    private mockService: MocksService,
    private formBuilder: FormBuilder,
    private zone: NgZone
  ){ 
    this.getData()
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose()
      } 
    })
  }

  getData() {
    this.mockService.getAll('admin-user/users.data.json').subscribe(
      (res) => {
        // Success
        this.tableRows = [...res]
        this.tableTemp = this.tableRows.map((prop, key) => {
          return {
            ...prop,
            id: key
          };
        });
      
      },
      () => {
        // Unsuccess
      },
      () => {
        // After
        this.getCharts()
      }
    )

    this.mockService.getAll('admin-report/report-data-1.json').subscribe(
      (res) => {
        // Success
        this.dataChart = res
      },
      () => {
        // Unsuccess
      },
      () => {
        // After
        this.mockService.getAll('admin-report/report-data-2.json').subscribe(
          (res) => {
            // Success
            this.dataChart2 = res
          },
          () => {
            // Unsuccess
          },
          () => {
            // After
            this.mockService.getAll('admin-report/report-data-3.json').subscribe(
              (res) => {
                // Success
                this.dataChart3 = res
              },
              () => {
                // Unsuccess
              },
              () => {
                // After
                this.getCharts()
              }
            )
          }
        )
      }
    )
  } 
  
  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart()
    })
  }

  getChart() {
    let chart = am4core.create("piesub", am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
      {
        item: "Opening",
        value: 40
      },
      {
        item: "Closing",
        value: 30
      },
      {
        item: "Balance",
        value: 10
      },
      {
        item: "Consumption",
        value: 30
      }
    ];
    chart.radius = am4core.percent(70);
    chart.innerRadius = am4core.percent(40);
    chart.startAngle = 0;
    chart.endAngle = 360;


    let series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "item";
    series.ticks.template.disabled = true;
    series.labels.template.disabled = true;

    series.slices.template.cornerRadius = 10;
    series.slices.template.innerCornerRadius = 7;
    series.slices.template.draggable = true;
    series.slices.template.inert = true;
    series.alignLabels = false;

    series.hiddenState.properties.startAngle = 90;
    series.hiddenState.properties.endAngle = 90;

    //chart.legend = new am4charts.Legend();
    this.chart = chart
  }


}
