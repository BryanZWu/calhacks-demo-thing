import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core/'

@Component({
  selector: 'app-degree-requirements',
  templateUrl: './degree-requirements.component.html',
  styleUrls: ['./degree-requirements.component.css']
})
export class DegreeRequirementsComponent implements OnInit {

  /** for now it's just an array of strings for the reqs.
  We'll take in objects later**/
  constructor() { }

  ngOnInit() {
  }

}
