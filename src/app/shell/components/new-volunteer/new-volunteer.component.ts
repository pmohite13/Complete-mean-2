import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { DataService } from '../../../core/data.service';
import { IState, ICity, IWorkArea, IQualification, IVolunteer, IUser } from '../../../shared/interfaces';
import { debug } from 'util';
import { ErrorStateMatcher } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

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
  user: IUser;
  volunteer: IVolunteer;

  constructor(private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute) {
    this.buildFormGroup();
  }

  ngOnInit() {
    debugger;
    let id = this.route.snapshot.params['id'];


    if (id !== '0') {
      this.currMode = 'edit';
      this.getUserAndVolunteer();
    }
    else {
      this.getUser();
    }
    this.getStates();
    // this.getQualifications();
    this.getWorkAreas();
    this.setMinDate();


    this.currMode = 'add';
  }

  private getUser() {
    debugger;
    let token = localStorage.getItem('token');
    this.dataService.getUser(token)
      .subscribe((user: IUser) => {
        debugger;
        this.user = user;
      },
        (err) => console.log(err));
  }

  private getUserAndVolunteer() {
    debugger;
    let token = localStorage.getItem('token');
    this.dataService.getUser(token)
      .subscribe((user: IUser) => {
        debugger;
        this.user = user;
        this.dataService.getVolunteerByUser(this.user.email)
          .subscribe((volunteer: IVolunteer) => {
            debugger;
            this.volunteer = volunteer[0];
            this.getQualifications();
            this.volunteerFormGroup.patchValue({
              prefix: this.volunteer.prefix,
              dateOfBirth: this.volunteer.dateOfBirth,
              gender: this.volunteer.gender,
              workAreas: this.volunteer.workAreas,
              qualification: this.volunteer.qualification,
              // qualification: { 'id': 4, 'name': "Masters" ,'_id':'5bd1bbd4bf3da88b50088661', '__v' : 0},
              address1: this.volunteer.address1,
              address2: this.volunteer.address2,
              pincode: this.volunteer.pincode,
              state: this.volunteer.state,
              city: this.volunteer.city
            });
          },
            (err) => console.log(err));
      },
        (err) => console.log(err));
  }

  public qualificationChange(qualification) {
    debugger;

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
      prefix: ['2', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['2', Validators.required],
      workAreas: ['', Validators.required],
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
    volunteer.user = this.user;

    this.dataService.insertVolunteer(volunteer)
      .subscribe((volunteer: IVolunteer) => {
        debugger;
        if (volunteer) {
          this.router.navigate(['shell/volunteerProfile']);
        }
        else {
          //this.errorMessage = 'Unable to add customer';
        }
      },
        (err) => console.log(err));


  }

}

