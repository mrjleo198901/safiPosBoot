import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goClientes() {
    this.router.navigate(['dashboard/client']);
  }

  goCash() {
    this.router.navigate(['dashboard/cash']);
  }

  goProductos() {
    this.router.navigate(['dashboard/cash']);
  }

  goClsoe() {
    this.router.navigate(['dashboard/cash']);
  }

}
