import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { MySpaceComponent } from './my-space/my-space.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';
import { TrackListComponent } from './track-list/track-list.component';
import { TrackComponent } from './track/track.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    BottomNavComponent,
    HomeComponent,
    SearchComponent,
    MySpaceComponent,
    CardComponent,
    DetailComponent,
    TrackListComponent,
    TrackComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    HttpClientModule,
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
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
