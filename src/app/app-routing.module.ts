import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './pages/main/main.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterRoleComponent } from './pages/register-role/register-role.component';
import { StudentRegisterComponent } from './components/student-register/student-register.component';
import { TuthorRegisterComponent } from './components/tuthor-register/tuthor-register.component';
import { SubscriptionsComponent } from './pages/subscriptions/subscriptions.component';
import { SessionComponent } from './components/session/session.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { CreateSessionComponent } from "./components/create-session/create-session.component";
import { TutorsComponent } from "./components/tutors/tutors.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tutors', component: TutorsComponent },
  {
    path: 'register',
    component: RegisterComponent,
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'role'
      },
      {
        path: 'role',
        component: RegisterRoleComponent
      },
      {
        path: 'student',
        component: StudentRegisterComponent
      },
      {
        path: 'tutor',
        component: TuthorRegisterComponent
      },
      {
        path: 'subscription',
        component : SubscriptionsComponent
      },
      {
        path:'pay',
        component: PaymentsComponent
      }
    ],
  },
  { path: 'main',
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'session'
      },
      {
        path: 'session',
        component: SessionComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'create-session',
        component: CreateSessionComponent
      }
    ]
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
