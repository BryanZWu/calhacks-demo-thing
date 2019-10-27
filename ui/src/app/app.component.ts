import { Component } from '@angular/core';
import {SemesterComponent} from './semester/semester.component'
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  semesterList = [[2019, "Spring"], [2019, "Fall"], [2020, 'Spring']]
  title = 'ui';
}
