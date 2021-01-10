import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private router: Router, private thislo: Location) { }

  ngOnInit(): void {
  }

  gotoQuest() {
    console.log(location.origin);
    // this.router.navigateByUrl(location.origin + '/home');
    // window.location.href = 'http://localhost:4200/';
    window.location.href = location.origin + '/adhoc/questionnaire/';
  }

}
