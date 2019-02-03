import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = {
    left: true,
    middle: false,
    right: false
  };

  constructor(public router: Router) { }

  ngOnInit() {
  }

  doLogin() {
    this.router.navigate(['dashboard/cash']);
  }

}
