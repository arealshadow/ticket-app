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
import { HomeComponent } from './home/home.component';

//primeNg imports
import {TabMenuModule} from 'primeng/tabmenu';
import {MultiSelectModule} from 'primeng/multiselect';
import {InputTextModule} from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';
import {CalendarModule} from 'primeng/calendar';
import {CaptchaModule} from 'primeng/captcha';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import {MessagesModule} from 'primeng/messages';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    MakeAppointmentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', pathMatch: 'full', component: HomeComponent},
      {path: 'appointment', component: MakeAppointmentComponent},
      {path: 'admin-dashboard', component: DashboardComponent},
      {path: 'about-us', component: AboutComponent},
      {path: '', redirectTo: '', pathMatch: 'full'},
    ]),
    TabMenuModule, 
    MultiSelectModule,
    InputTextModule,
    InputMaskModule,
    CalendarModule,
    CaptchaModule,
    ConfirmPopupModule,
    ToastModule,
    ButtonModule,
    MessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
