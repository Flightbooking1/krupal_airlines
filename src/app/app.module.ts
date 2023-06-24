
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';

import { KrupalAdminModule } from './krupal_airlines_admin/krupaladmin.module';
import { RouterModule } from '@angular/router';
import { KrupalComponent } from './krupal_airlines/krupal/krupal.component';
import { SeatComponent } from './krupal_airlines/seat/seat.component';
import { LoginComponent } from './krupal_airlines/login/login/login.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,

    KrupalComponent,SeatComponent,LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,FormsModule,

    KrupalAdminModule,
    RouterModule.forRoot([
      {  path: 'home', component: KrupalComponent},
      {
        path:"admin",
        loadChildren:()=>import('./krupal_airlines_admin/krupaladmin.module').then(x=>x.KrupalAdminModule)
     },
     {
      path:"**",redirectTo:"home"
    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
