import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { NdrComponent } from './dashboard/ndr/ndr.component';
import { DashTrackingComponent } from './dashboard/dash-tracking/dash-tracking.component';
import { RtoComponent } from './dashboard/rto/rto.component';
import { TemplateComponent } from './smartshipyaari/template/template.component';
import { AddressBookComponent } from './smartshipyaari/address-book/address-book.component';
import { ModulesComponent } from './smartshipyaari/modules/modules.component';
import { ApiDocComponent } from './smartshipyaari/api-doc/api-doc.component';
import { AddorderComponent } from './order/addorder/addorder.component';git clone https://papulprevo@bitbucket.org/papulprevo/shipyaari.git
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

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'ndr', component: NdrComponent},
  {path: 'dash-tracking', component: DashTrackingComponent},
  {path: 'rto', component: RtoComponent},
  {path: 'template', component: TemplateComponent},
  {path: 'address-book', component: AddressBookComponent},
  {path: 'modules', component: ModulesComponent},
  {path: 'api-doc', component: ApiDocComponent},
  {path: 'allorder', component: AllorderComponent},
  {path: 'addorder', component: AddorderComponent},
  {path: 'b2bshipment', component: B2bshipmentComponent},
  {path: 'addbulk', component: AddbulkComponent},
  {path: 'channelorder', component: ChannelOrderComponent},
  {path: 'tracking', component: TrackingComponent},
  {path: 'cod', component: CodComponent},
  {path: 'allinvoice', component: AllinvoicesComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'label', component: LabelComponent},
  {path: 'change-pass', component: ChangePassComponent},
  {path: 'priority', component: PriorityComponent},
  {path: 'download-pin', component: DownloadPinComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'csupport', component: CSupportComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'forget-pass', component: ForgetPassComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '**', component: NodataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
