import { Component, OnInit } from '@angular/core';
import { Info } from '../../../environments/info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thank',
  templateUrl: './thank.component.html',
  styleUrls: ['./thank.component.css']
})
export class ThankComponent implements OnInit {

  info = Info;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoEtax() {
    // this.router.navigateByUrl('home')
    window.location.href = 'https://etax.rd.go.th/';
  }

}
