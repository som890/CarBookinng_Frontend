import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddNewCarComponent } from './add-new-car/add-new-car.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';

import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';


import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatDialogRef } from '@angular/material/dialog';
import {MatTreeModule} from '@angular/material/tree';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowCarDetailsComponent } from './show-car-details/show-car-details.component';
import { ShowCarImagesDialogComponent } from './show-car-images-dialog/show-car-images-dialog.component';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { CarViewDetailsComponent } from './car-view-details/car-view-details.component';
import { BookingInformationComponent } from './booking-information/booking-information.component';
import { BookCarComponent } from './book-car/book-car.component';
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';
import { DeleteCarComponent } from './delete-car/delete-car.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    AddNewCarComponent,
    ShowCarDetailsComponent,
    ShowCarImagesDialogComponent,
    MyBookingComponent,
    CarViewDetailsComponent,
    BookingInformationComponent,
    BookCarComponent,
    BookingConfirmationComponent,
    DeleteCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatGridListModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatTreeModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatToolbarModule,
    FormsModule
   
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
