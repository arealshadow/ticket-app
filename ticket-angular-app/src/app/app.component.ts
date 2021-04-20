import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ticket-angular-app';
  
  menuItems: MenuItem[];
  activeItem: MenuItem;

  
  ngOnInit(): void {
    this.menuItems = [
      {label: 'Home', icon: 'pi pi-fw pi-home'},
      {label: 'Appointment', icon: 'pi pi-fw pi-calendar', routerLink: '/make-appointment'},
      {label: 'Dashboard', icon: 'pi pi-fw pi-users', routerLink: '/admin-dashboard'},
      {label: 'About Us', icon: 'pi pi-fw pi-question-circle', routerLink: '/about-us'}
  ];

  this.activeItem = this.menuItems[0];
  }

}
