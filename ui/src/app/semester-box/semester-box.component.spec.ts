import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterBoxComponent } from './semester-box.component';

describe('SemesterBoxComponent', () => {
  let component: SemesterBoxComponent;
  let fixture: ComponentFixture<SemesterBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemesterBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemesterBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
