import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { CostsComponent } from './pages/costs/costs.component';
import { FindVechicleComponent } from './pages/find-vechicle/find-vechicle.component';
import { HomeComponent } from './pages/home/home.component';
import { PurchaseRulesComponent } from './pages/purchase-rules/purchase-rules.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'purchaseRules', component: PurchaseRulesComponent },
  { path: 'findVehicle', component: FindVechicleComponent },
  { path: 'costs', component: CostsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
