import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core/'

@Component({
  selector: 'app-requirement-category',
  templateUrl: './requirement-category.component.html',
  styleUrls: ['./requirement-category.component.css']
})
export class RequirementCategoryComponent implements OnInit {
  @Input() title: string
  @Input() requirements: Array<string>
  /** for now it's just an array of strings for the reqs.
  We'll take in objects later**/
  constructor() { }

  ngOnInit() {
  }

}
