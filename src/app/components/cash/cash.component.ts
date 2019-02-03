import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css']
})
export class CashComponent implements OnInit {

  productos: any[];

  constructor() { }

  ngOnInit() {
    this.productos = [
      { cod: 'P001', cant: 2, desc: 'Producto uno', unit: 2.5, total: 5.00 },
      { cod: 'P002', cant: 3, desc: 'Producto dos', unit: 2.5, total: 7.50 },
      { cod: 'P003', cant: 1, desc: 'Producto tres', unit: 2.5, total: 2.5 },
      { cod: 'P004', cant: 2, desc: 'Producto cuatro', unit: 1.75, total: 3.50 },
      { cod: 'P005', cant: 4, desc: 'Producto cinco', unit: 1.50, total: 3.00 }
    ]
  }

}
