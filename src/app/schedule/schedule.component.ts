import { Component, OnInit } from '@angular/core';
import { Schedule } from '../model/schedule';
import { ScheduleService } from '../services/flight/schedule.service';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class ScheduleComponent implements OnInit {
  schedules:Schedule[]=[]
  scheduleId?:any;
  lastRefreshTime: any;
  timeDifference?: number;
  constructor(private route: Router,private scheduleservice: ScheduleService, private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getAll()
  }

  loadEditSchedulePage(id:any){
    this.scheduleId=id;
    console.log('loadEditSchedulePage',id)
    this.route.navigate(['admin/schedule/edit',id])
  }
  getAll(){
    console.log("get all airports entered")
    this.scheduleservice.getAllSchedules().subscribe(data=>{
      console.log('get all Schedules',data)
      const ActiveSchedules=data.filter(x=>x.status =="Active")
      console.log('get Active Schedules',data)
      this.schedules=ActiveSchedules;
    })
  }
  refreshComponent(){
    this.ngOnInit()
    const currentTime = new Date().getTime();
    if (this.lastRefreshTime) {
      const timeDiffInMillis = currentTime - this.lastRefreshTime;
      this.timeDifference = Math.floor(timeDiffInMillis / 1000 / 60); // Convert milliseconds to minutes
      console.warn(this.timeDifference)
    }
    this.lastRefreshTime = currentTime;
  }
  loadDeleteSchedulePage(id?:any){
    this.scheduleId=id;
    this.scheduleservice.deleteSchedule(id).subscribe(data=>{
      console.log("deleted data Schedule",data)
      this.ngOnInit()
    })
  }
  confirm(event: Event,id?:any) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Are you sure that you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
            this.loadDeleteSchedulePage(id)
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
        }
    });
}
patchSchedule(id:number){
  this.scheduleservice.patchSchedule(id).subscribe(data =>{
  console.log('patch method Schedule',data)
  })
  }
}
