import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { DataService } from '../../../core/data.service';
import { IState, ICity, IWorkArea, IQualification, IVolunteer } from '../../../shared/interfaces';
import { debug } from 'util';
import { ErrorStateMatcher } from '@angular/material';
import { Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-new-volunteer',
  templateUrl: './new-volunteer.component.html',
  styleUrls: ['./new-volunteer.component.scss']
})
export class NewVolunteerComponent implements OnInit {

  matcher = new MyErrorStateMatcher();
  toppings: FormControl;
  toppingList: string[] = [];
  // foods: Food[] = [];
  public volunteerFormGroup: FormGroup;
  states: IState[];
  cities: ICity[];
  minDate: Date;
  maxDate: Date;
  prefixMr: string;
  prefixMs: string;
  prefixOther: string;
  currMode: string;
  male: string;
  female: string;
  other: string;
  workAreas: IWorkArea[];
  qualifications: IQualification[];

  constructor(private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router) {
    this.buildFormGroup();
  }

  ngOnInit() {

    this.getStates();
    this.getQualifications();
    this.getWorkAreas();
    this.setMinDate();


    this.currMode = 'add';

    if (this.currMode === 'add') {
      this.setPrefix();
      this.setGender();
    }

  }


  private setPrefix() {
    this.prefixMr = 'false';
    this.prefixMs = 'true';
    this.prefixOther = 'false';
  }

  private setGender() {
    this.male = 'false';
    this.female = 'true';
    this.other = 'false';
  }

  private setMinDate() {
    let currDate = new Date();
    let year = currDate.getFullYear() - 18;
    let month = currDate.getMonth();
    let day = currDate.getDay();
    this.maxDate = new Date(year, month, day);
  }

  private buildFormGroup() {
    this.volunteerFormGroup = this.formBuilder.group({
      prefix: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      workArea: ['', Validators.required],
      qualification: ['', Validators.required],
      address1: [''],
      address2: [''],
      pincode: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  getStates() {
    this.dataService.getStates().subscribe((states: IState[]) => {
      return this.states = states
    });
  }

  public stateChange(state: IState): any {
    this.dataService.getCitiesForState(state.id)
      .subscribe((cities: ICity[]) => {
        this.cities = cities;
      },
        (err) => console.log(err));
  }

  getWorkAreas() {
    this.dataService.getWorkAreas().subscribe((workAreas: IWorkArea[]) => {
      return this.workAreas = workAreas
    });
  }

  getQualifications() {
    this.dataService.getQualifications().subscribe((qualifications: IQualification[]) => {
      return this.qualifications = qualifications
    });
  }

  pincodeKeyUp(event) {
    debugger;
    return (event.charCode >= 48 && event.charCode <= 57);

  }

  submit() {
    debugger;
    let volunteer: IVolunteer;
    volunteer = this.volunteerFormGroup.value;

    volunteer.stateId = volunteer.state.id;
    volunteer.cityId = volunteer.city.id;
    volunteer.qualificationId = volunteer.qualification.id;

    this.dataService.insertVolunteer(volunteer)
      .subscribe((customer: IVolunteer) => {
        debugger;
        if (customer) {
          this.router.navigate(['/customers']);
        }
        else {
          //this.errorMessage = 'Unable to add customer';
        }
      },
        (err) => console.log(err));


  }

}

// export interface Food {
//   value: string;
//   viewValue: string;
// }
