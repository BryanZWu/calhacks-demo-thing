import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.css']
})
export class SemesterComponent implements OnInit {
  season = "Fall"
  year = 2019
  constructor() { }

  ngOnInit() {
  }

}
