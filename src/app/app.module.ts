import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { NdrComponent } from './dashboard/ndr/ndr.component';
import { DashTrackingComponent } from './dashboard/dash-tracking/dash-tracking.component';
import { RtoComponent } from './dashboard/rto/rto.component';
import { TemplateComponent } from './smartshipyaari/template/template.component';
import { AddressBookComponent } from './smartshipyaari/address-book/address-book.component';
import { ModulesComponent } from './smartshipyaari/modules/modules.component';
import { ApiDocComponent } from './smartshipyaari/api-doc/api-doc.component';
import { AddorderComponent } from './order/addorder/addorder.component';
import { B2bshipmentComponent } from './order/b2bshipment/b2bshipment.component';
import { AddbulkComponent } from './order/addbulk/addbulk.component';
import { AllorderComponent } from './order/allorder/allorder.component';
import { ChannelOrderComponent } from './order/channel-order/channel-order.component';
import { TrackingComponent } from './tracking/tracking.component';
import { CodComponent } from './billing/cod/cod.component';
import { AllinvoicesComponent } from './billing/allinvoices/allinvoices.component';
import { ReportsComponent } from './billing/reports/reports.component';
import { LabelComponent } from './settings/label/label.component';
import { ChangePassComponent } from './settings/change-pass/change-pass.component';
import { PriorityComponent } from './settings/priority/priority.component';
import { DownloadPinComponent } from './settings/download-pin/download-pin.component';
import { FeedbackComponent } from './help/feedback/feedback.component';
import { CSupportComponent } from './help/c-support/c-support.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { ForgetPassComponent } from './authentication/forget-pass/forget-pass.component';
import { ProfileComponent } from './authentication/profile/profile.component';
import { NodataComponent } from './nodata/nodata.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    NdrComponent,
    DashTrackingComponent,
    RtoComponent,
    TemplateComponent,
    AddressBookComponent,
    ModulesComponent,
    ApiDocComponent,
    AddorderComponent,
    B2bshipmentComponent,
    AddbulkComponent,
    AllorderComponent,
    ChannelOrderComponent,
    TrackingComponent,
    CodComponent,
    AllinvoicesComponent,
    ReportsComponent,
    LabelComponent,
    ChangePassComponent,
    PriorityComponent,
    DownloadPinComponent,
    FeedbackComponent,
    CSupportComponent,
    LoginComponent,
    SignupComponent,
    ForgetPassComponent,
    ProfileComponent,
    NodataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
