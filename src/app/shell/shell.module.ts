import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ShellComponent } from './shell.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { ApplyToProjectComponent } from './components/apply-to-project/apply-to-project.component';
import { NewVolunteerComponent } from './components/new-volunteer/new-volunteer.component';
import { AuthGuardService } from '../core/auth-guard.service';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { MAT_DATE_LOCALE } from '@angular/material';
import { VolunteerProfileComponent } from './components/volunteer-profile/volunteer-profile.component';

const routes: Routes = [
  {
    path: '', component: ShellComponent,
    children: [
      { path: 'volunteerProfile', component: VolunteerProfileComponent,  canActivate: [AuthGuardService] },
      { path: 'forgotPassword', component: ForgotPasswordComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'newVolunteer/:id', component: NewVolunteerComponent, canActivate: [AuthGuardService] },
      { path: 'organization', component: OrganizationComponent, canActivate: [AuthGuardService] },
      { path: 'applyToProject/:id', component: ApplyToProjectComponent },
      { path: ':id', component: MainContentComponent },
      { path: '', component: MainContentComponent }
    ]
  },
  { path: '**', redirectTo: '' }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FlexLayoutModule,
    MDBBootstrapModule,
    SharedModule
  ],
  declarations: [
    ToolbarComponent,
    SidenavComponent,
    MainContentComponent,
    ShellComponent,
    ApplyToProjectComponent,
    NewVolunteerComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    OrganizationComponent,
    VolunteerProfileComponent
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ],
})
export class ShellModule { }
