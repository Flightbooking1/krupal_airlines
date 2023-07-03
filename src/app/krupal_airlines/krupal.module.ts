import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login/login.component';
import { SeatComponent } from './seat/seat.component';
import { BrowserModule } from '@angular/platform-browser';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { BookingComponent } from './booking/booking/booking.component';

@NgModule({
  imports: [BrowserModule,ToggleButtonModule,ButtonModule,FormsModule,SelectButtonModule],
  exports: [LoginComponent,SeatComponent,],
  declarations: [LoginComponent,SeatComponent, FlightSearchComponent, BookingComponent ],
  providers: [],
})
export class KrupalModule { }
