import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './components/banner/banner.component';
import { MoreSpokenComponent } from './components/more-spoken/more-spoken.component';
import { RankingStudentComponent } from './components/ranking-student/ranking-student.component';
import { UserApiService } from "./core/services/user-api.service";

//Material
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CallToRegisterComponent } from './components/call-to-register/call-to-register.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BadgeComponent } from './components/badge/badge.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './pages/main/main.component';
import { SessionComponent } from './components/session/session.component';
import { DialogSessionComponent } from './components/session/dialog-session/dialog-session.component';
import { RegisterRoleComponent } from './pages/register-role/register-role.component';
import { SubscriptionsComponent } from './pages/subscriptions/subscriptions.component';
import { StudentRegisterComponent } from './components/student-register/student-register.component';
import { TuthorRegisterComponent } from './components/tuthor-register/tuthor-register.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';
import { DialogTermComponent } from './components/terms-conditions/dialog-term/dialog-term.component';
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import { NgPaymentCardModule } from 'ng-payment-card';
import { PaymentsComponent } from './pages/payments/payments.component';
import { CreateSessionComponent } from './components/create-session/create-session.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core";
import { TutorsComponent } from './components/tutors/tutors.component';
import { TutorComponent } from './components/tutor/tutor.component';
import { MatPaginatorModule } from "@angular/material/paginator";




@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    CallToRegisterComponent,
    MoreSpokenComponent,
    TestimonialsComponent,
    FooterComponent,
    RankingStudentComponent,
    FeedbackComponent,
    DialogComponent,
    ProfileComponent,
    BadgeComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    SessionComponent,
    DialogSessionComponent,
    RegisterRoleComponent,
    SubscriptionsComponent,
    StudentRegisterComponent,
    TuthorRegisterComponent,
    TermsConditionsComponent,
    DialogTermComponent,
    PaymentsComponent,
    CreateSessionComponent,
    TutorsComponent,
    TutorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatChipsModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    HttpClientModule,
    MatTableModule,
    NgPaymentCardModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule
  ],
  providers: [MatDatepickerModule, MatNativeDateModule, UserApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
