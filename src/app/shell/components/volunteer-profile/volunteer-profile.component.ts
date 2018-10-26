import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../../../core/data.service';
import { Router } from '@angular/router';
import { IUser, IVolunteer } from '../../../shared/interfaces';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Organization 1', weight: 'Project 1', symbol: new Date() },
  { position: 2, name: 'Organization 2', weight: 'Project 2', symbol: new Date() },
  { position: 3, name: 'Organization 3', weight: 'Project 3', symbol: new Date() },
  { position: 4, name: 'Organization 4', weight: 'Project 4', symbol: new Date() },
  { position: 5, name: 'Organization 5', weight: 'Project 5', symbol: new Date() },
  { position: 6, name: 'Organization 6', weight: 'Project 6', symbol: new Date() },
  { position: 7, name: 'Organization 7', weight: 'Project 7', symbol: new Date() },
  { position: 8, name: 'Organization 8', weight: 'Project 8', symbol: new Date() },
  { position: 9, name: 'Organization 9', weight: 'Project 9', symbol: new Date() },
  { position: 10, name: 'Organization 10', weight: 'Project 10', symbol: new Date() },
];
@Component({
  selector: 'app-volunteer-profile',
  templateUrl: './volunteer-profile.component.html',
  styleUrls: ['./volunteer-profile.component.scss']
})
export class VolunteerProfileComponent implements OnInit {
  user: IUser;
  volunteer: IVolunteer;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router) { }

  ngOnInit() {
    this.getUser();
    // this.getVolunteer();   
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private getUser() {
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
          },
            (err) => console.log(err));
      },
        (err) => console.log(err));
  }

}
