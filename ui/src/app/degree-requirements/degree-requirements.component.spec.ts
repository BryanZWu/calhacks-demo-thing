import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeRequirementsComponent } from './degree-requirements.component';

describe('DegreeRequirementsComponent', () => {
  let component: DegreeRequirementsComponent;
  let fixture: ComponentFixture<DegreeRequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegreeRequirementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreeRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
