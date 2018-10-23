import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../core/data.service';
import { IState, ICity } from '../../../shared/interfaces';
import { debug } from 'util';


@Component({
  selector: 'app-new-volunteer',
  templateUrl: './new-volunteer.component.html',
  styleUrls: ['./new-volunteer.component.scss']
})
export class NewVolunteerComponent implements OnInit {
  toppings: FormControl;
  toppingList: string[] = [];
  foods: Food[] = [];
  public volunteerFormGroup: FormGroup;
  states: IState[];
  cities: ICity[];


  constructor(private formBuilder: FormBuilder,
    private dataService: DataService) {
    this.buildFormGroup();
  }

  ngOnInit() {

    // this.toppings = new FormControl();
    this.getStates();
    this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

    this.foods = [
      { value: 'steak-0', viewValue: 'Steak' },
      { value: 'pizza-1', viewValue: 'Pizza' },
      { value: 'tacos-2', viewValue: 'Tacos' }
    ];
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
      debugger;
      return this.states = states
    });
  }

  public stateChange(stateId: string): any {
    debugger;
    this.dataService.getCitiesForState(stateId)
      .subscribe((cities: ICity[]) => {
        debugger;
        this.cities = cities;

      },
        (err) => console.log(err));
  }
}

export interface Food {
  value: string;
  viewValue: string;
}
