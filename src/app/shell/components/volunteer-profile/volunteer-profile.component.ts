import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../../../core/data.service';
import { Router } from '@angular/router';
import { IUser, IVolunteer } from '../../../shared/interfaces';

@Component({
  selector: 'app-volunteer-profile',
  templateUrl: './volunteer-profile.component.html',
  styleUrls: ['./volunteer-profile.component.scss']
})
export class VolunteerProfileComponent implements OnInit {
  user: IUser;
  volunteer: IVolunteer;

  constructor(private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router) { }

  ngOnInit() {
    this.getUser();
    this.getVolunteer();
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
  private getVolunteer() {
    debugger;
    this.dataService.getVolunteerByUser(this.user)
      .subscribe((volunteer: IVolunteer) => {
        debugger;
        this.volunteer = volunteer;
      },
        (err) => console.log(err));
  }

}
