import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CashComponent } from './components/cash/cash.component';
import { ClientComponent } from './components/client/client.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'cash', component: CashComponent },
      { path: 'client', component: ClientComponent },
      { path: 'product', component: ProductsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
