import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';

import { AppComponent } from './app.component';
import { SemesterComponent } from './semester-box/semester/semester.component';
import { SemesterBoxComponent } from './semester-box/semester-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DegreeRequirementsComponent } from './degree-requirements/degree-requirements.component';
import { RequirementCategoryComponent } from './requirement-category/requirement-category.component';

@NgModule({
  declarations: [
    AppComponent,
    SemesterComponent,
    SemesterBoxComponent,
    DegreeRequirementsComponent,
    RequirementCategoryComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
