import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule} from '@angular/forms'


import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   { path:'dashboard', component: DashboardComponent },
   { path:'', component: DashboardComponent }
   ];

  
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})

  
export class AppModule { }
