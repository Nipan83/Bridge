import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { StatsComponent } from '../../stats/stats.component';
import { ReportsComponent } from '../../reports/reports.component';
import { InfoComponent } from '../../info/info.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'stats',   component: StatsComponent },
    { path: 'reports',     component: ReportsComponent },
    { path: 'info',     component: InfoComponent }
];
