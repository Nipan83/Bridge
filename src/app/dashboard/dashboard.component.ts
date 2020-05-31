import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [CookieService]
})
export class DashboardComponent implements OnInit {
  
  regions: any[];
  filtered_regions: any[];
  search_key: string;
  showMenuList: boolean = false;
  showDashboardContent: boolean = false;
  selected_region: string = "";

  constructor(private router: Router, private cookie: CookieService) { }

  select_region(value){
      this.selected_region = value;
      this.cookie.set('region',value);
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
      
      this.regions = ["McKinley", "Luna", "Cibola", "Apache", "Maricopa", "Pima", "East Carroll", "Madison", "Tensas", "East Baton", "Adams", "Dunn", "Mckenzie", "Wells", "Williams", "Barnstable", "Dukes", "Essex", "Middlesex", "Hampshire", "Kent", "New Castle", "Sussex", "Seattle", "Yalima", "Okanogan", "Clark", "Chester", "Brandford", "Somerest"]


  }

}
