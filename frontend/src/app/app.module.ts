import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from "@angular/material/icon";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { BackgroungLogoComponent } from './background-logo/background-logo.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { MySpaceComponent } from './my-space/my-space.component';


@NgModule({
  declarations: [
    AppComponent,
    BottomNavComponent,
    BackgroungLogoComponent,
    HomeComponent,
    SearchComponent,
    MySpaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgMultiSelectDropDownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
