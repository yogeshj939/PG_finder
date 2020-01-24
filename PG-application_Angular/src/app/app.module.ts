import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PgInputComponent } from './pg-input/pg-input.component';
import { PgDisplayComponent } from './pg-display/pg-display.component';
import { PgServiceService } from './pg-service.service'
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSliderModule} from '@angular/material/slider'
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component'

@NgModule({
  declarations: [
    AppComponent,
    PgInputComponent,
    PgDisplayComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    RouterModule.forRoot([
      { path: 'pgList', component: PgDisplayComponent },
    ])
  ],
  providers: [PgServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
