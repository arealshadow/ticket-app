import { Component, OnInit } from '@angular/core';
import { CustomerData } from '../ticket-data/CustomerData';
import {TicketInfoService} from '../ticket-info.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public customerInfo: CustomerData[];

  constructor(private ticketService: TicketInfoService) { }

  ngOnInit(): void {
    this.ticketService.getTicketApi().subscribe(data => {
      this.customerInfo = data.ticketInfo;
      console.log(this.customerInfo);
    });
  }

}
