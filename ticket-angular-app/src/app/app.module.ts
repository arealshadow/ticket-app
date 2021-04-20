import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { MakeAppointmentComponent } from './make-appointment/make-appointment.component';
import { RouterModule } from '@angular/router';

//primeNg imports
import {TabMenuModule} from 'primeng/tabmenu';
import {MultiSelectModule} from 'primeng/multiselect';
import {InputTextModule} from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';

//calendar IMPORTS
import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    MakeAppointmentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'make-appointment', component: MakeAppointmentComponent},
      {path: 'admin-dashboard', component: DashboardComponent},
      {path: 'about-us', component: AboutComponent},
      {path: '', redirectTo: '/make-appointment', pathMatch: 'full'},
    ]),
    TabMenuModule, 
    MultiSelectModule,
    FullCalendarModule,
    InputTextModule,
    InputMaskModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
