import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core/'


@Component({
  selector: 'app-semester-box',
  templateUrl: './semester-box.component.html',
  styleUrls: ['./semester-box.component.css']
})
export class SemesterBoxComponent implements OnInit {
  @Input() semesterList: Array<Array<string>>
  /** needs to change depending on the datatype**/

  constructor() { }

  ngOnInit() {
  }

}
