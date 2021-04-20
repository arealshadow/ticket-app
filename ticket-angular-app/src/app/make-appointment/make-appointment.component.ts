import { Component, OnInit } from '@angular/core';
import { CustomerData } from '../ticket-data/CustomerData';
import {TicketInfoService} from '../ticket-info.service';

//Calendar imports
import { CalendarOptions } from '@fullcalendar/angular';


interface Service {
  name: string
}

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.css']
})
export class MakeAppointmentComponent implements OnInit {
  services: Service[];
  selectedServices: Service[];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    timeZone: 'local',
    dateClick: this.handleDateClick.bind(this),
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'today'
    },
    events: [
      { title: 'event 1', date: '2021-04-01' },
      { title: 'event 2', date: '2021-04-02' }
    ]
  }

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }

  constructor() {
    this.services = [
      {name: 'New York'},
      {name: 'Rome'},
      {name: 'London'},
      {name: 'Istanbul'},
      {name: 'Paris'}
    ];
   }

  ngOnInit(): void {
    

    

  }
}
