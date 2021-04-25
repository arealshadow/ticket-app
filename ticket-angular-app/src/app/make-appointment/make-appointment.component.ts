import { Component, OnInit } from '@angular/core';

//primeng imports
import {ConfirmationService, MessageService} from 'primeng/api';



interface Service {
  name: string
}

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class MakeAppointmentComponent implements OnInit {
  services: Service[];
  selectedServices: Service[];
  value: Date;


//captcha todo
//   showResponse(response) {
//     //call to a backend to verify against recaptcha with private key
// }



  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
    ) {
    this.services = [
      {name: 'New York'},
      {name: 'Rome'},
      {name: 'London'},
      {name: 'Istanbul'},
      {name: 'Paris'}
    ];
   }

   confirm(event: Event) {
    this.confirmationService.confirm({
        target: event.target,
        message: 'Are you sure that you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.messageService.add({severity:'info', summary:'Confirmed', detail:'You have accepted'});
        },
        reject: () => {
            this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
        }
    });
  }

  ngOnInit(): void {
    

    

  }
}
