import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  id: string;
  tiles: Tile[] = [
    { id: 1, text: 'I am Volunteer', cols: 2, rows: 2, color: 'lightblue' },
    { id: 2, text: 'Looking for Volunteers', cols: 2, rows: 2, color: 'lightgreen' },

  ];

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  public onTileClicked(tile: Tile) {
    debugger;
    this.router.navigate(['shell/login'], { queryParams: { entityId: tile.id } });
  }

}

export interface Tile {
  id: number;
  color: string;
  cols: number;
  rows: number;
  text: string;
}
