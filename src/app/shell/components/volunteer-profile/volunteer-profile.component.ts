import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../../../core/data.service';
import { Router } from '@angular/router';
import { IUser, IVolunteer } from '../../../shared/interfaces';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
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
