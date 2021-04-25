import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { MakeAppointmentComponent } from './make-appointment/make-appointment.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

//ANTD imports
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';

registerLocaleData(en);


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
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', pathMatch: 'full', component: HomeComponent},
      {path: 'appointment', component: MakeAppointmentComponent},
      {path: 'admin-dashboard', component: DashboardComponent},
      {path: 'about-us', component: AboutComponent},
      {path: '', redirectTo: '', pathMatch: 'full'},
    ]),
    NzMenuModule,
    NzIconModule,
    NzGridModule,
    NzInputModule,
    NzTimePickerModule,
    NzFormModule,
    NzButtonModule,
    NzTypographyModule,
    NzAlertModule,
    NzPopconfirmModule,
    NzToolTipModule,
    NzMessageModule,
    NzDatePickerModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
