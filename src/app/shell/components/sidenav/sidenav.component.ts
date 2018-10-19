import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../core/data.service';
import { IPagedResults, IProject } from '../../../shared/interfaces';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  projects: IProject[] = [];
  filteredProjects: IProject[] = [];
  totalRecords: number = 0;
  pageSize: number = 10;

  constructor(private zone: NgZone,
    private router: Router,
    private dataService: DataService) {
    this.mediaMatcher.addListener(mql => zone.run(() => this.mediaMatcher = mql));
  }

  ngOnInit() {
    this.getProjectList(1);
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

  getProjectList(page: number) {
    debugger;
    this.dataService.getProjectsPage((page - 1) * this.pageSize, this.pageSize)
      .subscribe((response: IPagedResults<IProject[]>) => {
        debugger;
        this.projects = this.filteredProjects = response.results;
        this.totalRecords = response.totalRecords;
      },
        (err: any) => console.log(err),
        () => console.log('getCustomersPage() retrieved customers'));
  }

}
