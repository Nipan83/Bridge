import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
		
		selected_region: string;
		run_regions: any[];

  constructor() { }

  ngOnInit(): void {
  		this.run_regions = ["Alabama", "Alaska", "Arizona", "Arkansas"]
  }
  select_region(val){
  		this.selected_region = val;
  }

}
