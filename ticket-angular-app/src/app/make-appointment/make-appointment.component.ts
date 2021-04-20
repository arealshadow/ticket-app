import { Component, OnInit } from '@angular/core';
import { CustomerData } from '../ticket-data/CustomerData';
import {TicketInfoService} from '../ticket-info.service';

//Calendar import
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {FullCalendar} from 'primeng/fullcalendar';



@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.css']
})
export class MakeAppointmentComponent implements OnInit {
  calendarEvents: CustomerData[];

  calendarOptions: any;
  
  constructor(private ticketService: TicketInfoService) { }

  ngOnInit(): void {
    this.ticketService.getTicketApi().subscribe(events => {
      this.calendarEvents = events.ticketInfo;
    });

    this.calendarOptions = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      timeZone: 'local',
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'today'
      },
      events:[
        { title: 'event 1', date: '2021-04-01' },
        { title: 'event 2', date: '2021-04-02' }
      ]
    }
  }

}
