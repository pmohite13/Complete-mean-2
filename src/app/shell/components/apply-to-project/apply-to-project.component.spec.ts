import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyToProjectComponent } from './apply-to-project.component';

describe('ApplyToProjectComponent', () => {
  let component: ApplyToProjectComponent;
  let fixture: ComponentFixture<ApplyToProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyToProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyToProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
