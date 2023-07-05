import { Component, OnInit } from '@angular/core';
import { Schedule } from 'src/app/model/schedule';
import { ScheduleService } from 'src/app/services/flight/schedule.service';
import { FlightSearchService } from 'src/app/services/scheduleSearch/ScheduleSearch.service';

@Component({
  selector: 'app-scheduled-flights',
  templateUrl: './scheduled-flights.component.html',
  styleUrls: ['./scheduled-flights.component.css']
})
export class ScheduledFlightsComponent implements OnInit {
  schedule:Schedule[]=[];
  constructor(
    private scheduleService: ScheduleService,
    private flightsearchservice: FlightSearchService

  ) {
    this.schedule= flightsearchservice.getfilterdetails();
  }

  ngOnInit() {}

get flights():Schedule[]{
  return this.schedule;
}
}
