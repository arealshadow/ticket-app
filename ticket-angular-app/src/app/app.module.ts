import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { MakeAppointmentComponent } from './make-appointment/make-appointment.component';
import { RouterModule } from '@angular/router';

//primeNg imports
import {TabMenuModule} from 'primeng/tabmenu';
import {MenubarModule} from 'primeng/menubar';
import {FullCalendarModule} from 'primeng/fullcalendar';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    MakeAppointmentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'make-appointment', component: MakeAppointmentComponent},
      {path: 'admin-dashboard', component: DashboardComponent},
      {path: 'about-us', component: AboutComponent},
      {path: '', redirectTo: '/make-appointment', pathMatch: 'full'},
    ]),
    TabMenuModule, 
    MenubarModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
