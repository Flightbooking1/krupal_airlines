import { ScheduleService } from 'src/app/services/flight/schedule.service';
import { Router } from '@angular/router';
import { SearchFlight } from 'src/app/model/booking.model';
import { Schedule } from 'src/app/model/schedule';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchService {
  schedules: Schedule[] = [];
  filterschedule: Schedule[] = [];

  constructor(
    private scheduleService: ScheduleService,
    private router: Router
  ) {
    this.scheduleService.getAllSchedules().subscribe(data => {
      this.schedules = data;
      console.log(this.schedules);
    });
  }

  gettingdata(searchFlight: SearchFlight) {
    console.log('get all Schedules', this.schedules);
    const filteredSchedules = this.schedules.filter(schedule => {

      console.log(this.isSameDate(new Date(schedule.arrival_time), searchFlight.departureDate!));

      // new Date(schedule.arrival_time) === searchFlight.returnDate
      // new Date(schedule.departure_time) === searchFlight.departureDate
      console.log("source airport", schedule.source_airport.city)
      console.log("search sourse", searchFlight.fromLocation?.city)
      console.log(schedule.source_airport.city === searchFlight.fromLocation?.city);

      console.log("dest airport", schedule.destination_airport.city)
      console.log("search dest", searchFlight.toLocation?.city)
      console.log(schedule.destination_airport.city === searchFlight.toLocation?.city);
      return (schedule.source_airport.city === searchFlight.fromLocation?.city &&

        schedule.destination_airport.city === searchFlight.toLocation?.city && this.isSameDate(new Date(schedule.arrival_time), searchFlight.departureDate!))
    }
    );
    console.log('Filtered Schedules', filteredSchedules);
    this.filterschedule = filteredSchedules;

    // Navigate to the desired route using router link
    this.router.navigate(['/scheduleflight']);
  }
  isSameDate(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }
  getfilterdetails(): Schedule[] {
    return this.filterschedule;
  }
}
