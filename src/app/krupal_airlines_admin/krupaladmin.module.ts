import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BrowserModule } from '@angular/platform-browser';



let routing=RouterModule.forChild(
  [
    {
      path:"admin",component:AdminComponent,/*data: { roles: ['admin']},*/
      children:[
        {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
        {path: 'dashboard', component: DashboardComponent},
        {path: 'statistics', component: StatisticsComponent},
        {
          path: 'coupons',
          loadChildren: () => import('../coupons/coupons.module').then(m => m.CouponsModule)
        },
        {path: 'pages', component: PagesComponent},
        {path: 'media', component: MediaComponent},
        {path: 'settings', component: SettingsComponent}
      ]
    }
  ]
)
@NgModule({
  imports: [routing,BrowserModule],
  exports: [SidenavComponent,AdminComponent],
  declarations: [
    SublevelMenuComponent,SidenavComponent,AdminComponent
  ],
  providers: [],
})

export class KrupalAdminModule { }
