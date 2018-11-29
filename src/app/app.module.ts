import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, NavigationEnd} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatAutocompleteModule,  
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatOptionModule,       
  MatFormFieldModule,  
   
  MatDatepicker,      
  ErrorStateMatcher,ShowOnDirtyErrorStateMatcher      
} from '@angular/material';   


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { ApiService } from './api.service';
import { AuthGuard } from './auth.guard';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    LayoutModule,
    MatButtonModule,      
    MatMenuModule,      
    MatToolbarModule,      
    MatIconModule,      
    MatCardModule,      
    BrowserAnimationsModule,      
    MatFormFieldModule,      
    MatInputModule,      
    MatDatepickerModule,      
    MatNativeDateModule,      
    MatRadioModule,      
    MatSelectModule,      
    MatOptionModule,      
    MatSlideToggleModule,

    MatAutocompleteModule,  
    MatButtonToggleModule,    
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,    
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,   
    MatListModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,    
    MatRippleModule,    
    MatSidenavModule,
    MatSliderModule,    
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,    
    MatTooltipModule,

    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    FlashMessagesModule.forRoot()


  ],
  exports: [      
    MatButtonModule,      
    MatMenuModule,      
    MatToolbarModule,      
    MatIconModule,      
    MatCardModule,      
    BrowserAnimationsModule,      
    MatFormFieldModule,      
    MatInputModule,      
    MatDatepickerModule,      
    MatNativeDateModule,      
    MatRadioModule,      
    MatSelectModule,      
    MatOptionModule,      
    MatSlideToggleModule,
    
    MatAutocompleteModule,  
    MatButtonToggleModule,    
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,    
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,   
    MatListModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,    
    MatRippleModule,    
    MatSidenavModule,
    MatSliderModule,    
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,    
    MatTooltipModule
    
  ],      
  providers: [AuthGuard, ApiService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
