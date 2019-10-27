import { Component } from '@angular/core';
import {SemesterComponent} from './semester-box/semester/semester.component'
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  semestList = [[2019, "Spring"], [2019, "Fall"], [2020, 'Spring'],[2020, "Fall"], [2021, "Spring"], [2021, "Fall"],[2022, "Spring"], [2022, "Fall"],]
  title = 'ui';
}
