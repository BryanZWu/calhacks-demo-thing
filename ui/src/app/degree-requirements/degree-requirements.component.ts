import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core/'

@Component({
  selector: 'app-degree-requirements',
  templateUrl: './degree-requirements.component.html',
  styleUrls: ['./degree-requirements.component.css']
})
export class DegreeRequirementsComponent implements OnInit {
  @Input() categoryList: Array<Array<[string, Array<string>]>>
  /** these will have to be in the same order. **/
  constructor() { }

  ngOnInit() {
  }

}
