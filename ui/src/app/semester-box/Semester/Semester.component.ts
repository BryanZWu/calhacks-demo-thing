import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core/';
import {MatMenuModule} from '@angular/material/menu';


@Component({
  selector: 'app-Semester',
  templateUrl: './Semester.component.html',
  styleUrls: ['./Semester.component.css']
})
export class SemesterComponent implements OnInit {
  @Input() season: string;
  @Input() year: number;

  constructor() {
  }

  ngOnInit() {
  }

}
