import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SemesterComponent } from './semester/semester.component';
import { SemesterBoxComponent } from './semester-box/semester-box.component';

@NgModule({
  declarations: [
    AppComponent,
    SemesterComponent,
    SemesterBoxComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
