import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RequesterHomeComponent} from './Component/Requester/requester-home/requester-home.component';
import {LoginComponent} from './Component/login/login.component';
import {ForgotPasswordComponent} from './Component/forgot-password/forgot-password.component';
import {AuthGuard} from "./Core/guard/auth.guard";
import {TmHomeComponent} from "./Component/Technical-Manager/tm-home/tm-home.component";
import {AdminGuard} from "./Core/guard/admin.guard";
import {RegistrationComponent} from "./Component/registration/registration.component";
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';
import { ChangePasswordComponent } from './Component/change-password/change-password.component';
import {CalenderComponent} from './Component/calender/calender.component';
import { MnHomeComponent } from './Component/Manager/mn-home/mn-home.component';
import { MnGuard } from './Core/guard/mn.guard';
import { MyOrgComponent } from './Component/my-org/my-org.component';
import { ReferralsComponent } from './Component/referrals/referrals.component';
import { TransactionsComponent } from './Component/transactions/transactions.component';
import { SettingComponent } from './Component/setting/setting.component';
import { ReportsComponent } from './Component/feedback/reports/reports.component';
import { InterviewMatcherComponent } from './Component/interview-matcher/interview-matcher.component';
import { ForumComponent } from './Component/forum/forum/forum.component';
import { ForumListComponent } from './Component/forum/forum-list/forum-list.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },

  {
    path:"book-calendar",component:CalenderComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'my-org',
    component: MyOrgComponent
  },
  {
    path: 'tm-dashboard',
    component: TmHomeComponent,
    canActivate: [AdminGuard]
  },
  {
    path: "requester-home",
    component: RequesterHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "forum/:id",
    component: ForumComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "forum-list",
    component: ForumListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "matcher",
    component: InterviewMatcherComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "setting",
    component: SettingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "reports",
    component: ReportsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "mn-home",
    component: MnHomeComponent,
    canActivate: [MnGuard]
  },
  {
    path: "forgotPassword",
    component: ForgotPasswordComponent
  },  
  {
    path:"reset-password",
    component:ResetPasswordComponent
  },
  {
    path:"change-password",
    component:ChangePasswordComponent},
    {
      path:"referrals",
      component:ReferralsComponent},
      {
        path:"transactions",
        component:TransactionsComponent},
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
