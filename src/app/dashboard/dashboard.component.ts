import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import {Router} from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  regions: any[];
  filtered_regions: any[];
  search_key: string;
  showMenuList: boolean = false;
  showDashboardContent: boolean = false;
  selected_region: string;

  constructor(private router: Router) { }

  select_region(value){
      this.selected_region = value;
      this.showMenuList = false;
      this.showDashboardContent = true;
      let content = document.querySelector('#content');
      content.classList.add('content-flex')

  }
  navigateTo(val){
      this.router.navigateByUrl(val);
  }

  search(){
      let value = this.search_key;

      if(value.length<1){this.showMenuList = false;return;}
      this.showDashboardContent = false;
      let content = document.querySelector('#content');
      content.classList.remove('content-flex')
      this.showMenuList = true;
      this.filtered_regions = this.regions.filter( x => x.toLowerCase().includes(value.toLowerCase()))
      if(this.filtered_regions.length == 0){this.showMenuList = false}

  }

  ngOnInit() {
      
      this.regions = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]


  }

}
