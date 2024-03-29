import {BrowserModule} from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RequesterHeaderComponent} from './Component/Requester/requester-header/requester-header.component';
import {RequesterSidebarComponent} from './Component/Requester/requester-sidebar/requester-sidebar.component';
import {RequesterHomeComponent} from './Component/Requester/requester-home/requester-home.component';
import {LoginComponent} from './Component/login/login.component';
import {ForgotPasswordComponent} from './Component/forgot-password/forgot-password.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {authInterceptorProviders} from "./Core/interceptor/auth.interceptor";
import {MAT_DATE_LOCALE} from "@angular/material/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TmHomeComponent} from './Component/Technical-Manager/tm-home/tm-home.component';
import {TmHeaderComponent} from './Component/Technical-Manager/tm-header/tm-header.component';
import {TmSidebarComponent} from './Component/Technical-Manager/tm-sidebar/tm-sidebar.component';
import {RegistrationComponent} from "./Component/registration/registration.component";
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';
import { ChangePasswordComponent } from './Component/change-password/change-password.component';
import { CalenderComponent } from './Component/calender/calender.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { MnHomeComponent } from './Component/Manager/mn-home/mn-home.component';
import { MnSidebarComponent } from './Component/Manager/mn-sidebar/mn-sidebar.component';
import { MnHeaderComponent } from './Component/Manager/mn-header/mn-header.component';
import { MyOrgComponent } from './Component/my-org/my-org.component';
import { ReferralsComponent } from './Component/referrals/referrals.component';
import { DatePipe } from '@angular/common';
import { registerLocaleData } from '@angular/common'; // Added import for locale data
import { LanguageService } from './Core/services/language.service';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TransactionsComponent } from './Component/transactions/transactions.component';
import { SettingComponent } from './Component/setting/setting.component';
import { ReportsComponent } from './Component/feedback/reports/reports.component';
import { ReportFormComponent } from './Component/feedback/report-form/report-form.component';
import { InterviewMatcherComponent } from './Component/interview-matcher/interview-matcher.component';
import { NgCircleProgressModule } from "ng-circle-progress";
import { ForumListComponent } from './Component/forum/forum-list/forum-list.component';
import { ForumComponent } from './Component/forum/forum/forum.component';
import { StarRatingComponent } from './Component/feedback/star-rating/star-rating.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}



@NgModule({
  declarations: [
    AppComponent,
    RequesterHeaderComponent,
    RequesterSidebarComponent,
    RequesterHomeComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    TmHomeComponent,
    TmHeaderComponent,
    TmSidebarComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
    CalenderComponent,
    DateFormatPipe,
    MnHomeComponent,
    MnSidebarComponent,
    MnHeaderComponent,
    MyOrgComponent,
    ReferralsComponent,
    TransactionsComponent,
    SettingComponent,
    ReportsComponent,
    ReportFormComponent,
    InterviewMatcherComponent,
    ForumComponent,
    ForumListComponent,
    StarRatingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      backgroundColor: "teal",
      backgroundPadding: 8,
      radius: 60,
      space: -15,
      maxPercent: 100,
      unitsColor: "#ffffff",
      outerStrokeWidth: 7.5,
      outerStrokeColor: "white",
      innerStrokeColor: "teal",
      innerStrokeWidth: 3,
      titleColor: "#ffffff",
      subtitleColor: "#ffffff"
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ToastrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    HttpClientModule,
    FlatpickrModule.forRoot(),
    NgbModule,NgbModalModule
  ],
  providers: [
    authInterceptorProviders,
    DatePipe,
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'en-GB',
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
