import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {StatsService} from '../../services/stats.service'
import {EmploymentService} from '../../services/employment.service'



@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
  providers: [CookieService,StatsService, EmploymentService]
})
export class StatsComponent implements OnInit {

  spinner: boolean = true;
  maincontent: boolean = true;
  compareStat: boolean = false;
  NotcompareStat: boolean = true;
  private subscription: Subscription;
  private timer: Observable<any>;
  selected_region: string;
  poverty_number: string;
  employed_number: string;
  unemployed_number: string;
  poverty_perc: string;
  compared_area: string;
  areas: any[];

  constructor(private router: Router, private cookie: CookieService, private statService: StatsService, private employmentService: EmploymentService) { 
}
  startAnimationForLineChart(chart){
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;

      chart.on('draw', function(data) {
        if(data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if(data.type === 'point') {
              seq++;
              data.element.animate({
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
      });

      seq = 0;
  };
  startAnimationForBarChart(chart){
      let seq2: any, delays2: any, durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if(data.type === 'bar'){
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  };

  setTimer(){

    this.timer = Observable.timer(3000);
    this.subscription = this.timer.subscribe(() => {
        this.spinner = false;
        this.maincontent = false;
        this.generateStats();
    });
  }

  generateStats(){
  const dataDailySalesChart: any = {
          labels: ["'13", "'14", "'15", "'16", "'17", "'18", "'19"],
          series: [
              [12, 17, 11, 17, 23, 18, 38]
          ]
      };

  const dataDailySalesChart2: any = {
          labels: ["'13", "'14", "'15", "'16", "'17", "'18", "'19"],
          series: [
              [15, 11, 17, 12, 24, 19, 21]
          ]
      };

     const optionsDailySalesChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      }

      var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
      var dailySalesChart2 = new Chartist.Line('#dailySalesChart2', dataDailySalesChart2, optionsDailySalesChart);

      this.startAnimationForLineChart(dailySalesChart);
      this.startAnimationForLineChart(dailySalesChart2);


      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

      const dataCompletedTasksChart: any = {
          labels: ["'13", "'14", "'15", "'16", "'17", "'18", "'19"],
          series: [
              [230, 750, 450, 300, 280, 240, 200]
          ]
      };
      const dataCompletedTasksChart2: any = {
          labels: ["'13", "'14", "'15", "'16", "'17", "'18", "'19"],
          series: [
              [450, 350, 750, 200, 580, 640, 700]
          ]
      };

     const optionsCompletedTasksChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
      }

      var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
      var completedTasksChart2 = new Chartist.Line('#completedTasksChart2', dataCompletedTasksChart2, optionsCompletedTasksChart);

      // start animation for the Completed Tasks Chart - Line Chart
      this.startAnimationForLineChart(completedTasksChart);
      this.startAnimationForLineChart(completedTasksChart2);



      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

      var datawebsiteViewsChart = {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

        ]
      };
      var datawebsiteViewsChart2 = {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        series: [
          [242, 343, 720, 180, 453, 753, 926, 534, 868, 110, 956, 295]

        ]
      };
      var optionswebsiteViewsChart = {
          axisX: {
              showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
      };
      var responsiveOptions: any[] = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      var websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);
      var websiteViewsChart2 = new Chartist.Bar('#websiteViewsChart2', datawebsiteViewsChart2, optionswebsiteViewsChart, responsiveOptions);

      //start animation for the Emails Subscription Chart
      this.startAnimationForBarChart(websiteViewsChart);
      this.startAnimationForBarChart(websiteViewsChart2);
  }

  regionStats(area,flag){

      console.log(area)
      if(!area){area = this.compared_area}
      this.compared_area = area;
      if(area == "selected"){area = this.selected_region;}
      if(flag == "compare"){
      this.compareStat = true;
      this.NotcompareStat = false;
      let compare = document.getElementById('compare');
      compare.classList.add('active');
      let original = document.getElementById('original');
      compare.classList.remove('active');
      }

      this.poverty_number = this.statService.getPovertyStats(area)[0].total_poverty_count;
      this.employed_number = this.employmentService.getEmploymentStats(area)[0].employed;
      this.poverty_perc = this.statService.getPovertyStats(area)[0].poverty_prec;
      this.unemployed_number = this.employmentService.getEmploymentStats(area)[0].unemployed;
      console.log(this.poverty_number)
      
      this.generateStats();




  }

  ngOnInit() {

      this.selected_region = this.cookie.get('region');
      if(this.selected_region == ""){this.spinner = false;return;}
      this.areas = ["McKinley", "Luna", "Cibola", "Essex"]
      this.regionStats(this.selected_region,null);
      

      this.setTimer();

      /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

      

}

}
