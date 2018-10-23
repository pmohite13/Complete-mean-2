import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apply-to-project',
  templateUrl: './apply-to-project.component.html',
  styleUrls: ['./apply-to-project.component.scss']
})
export class ApplyToProjectComponent implements OnInit {
  id: string;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {    
      this.id = params['id'];
    });
  }

}
