import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PurchaseRulesComponent } from './pages/purchase-rules/purchase-rules.component';
import { FindVechicleComponent } from './pages/find-vechicle/find-vechicle.component';
import { CostsComponent } from './pages/costs/costs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutUsComponent } from './pages/home/about-us/about-us.component';
import { RealizationsComponent } from './pages/home/realizations/realizations.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { OpinionsComponent } from './pages/home/opinions/opinions.component';
import { StepsComponent } from './pages/purchase-rules/steps/steps.component';
import { ContactFormVechicleComponent } from './pages/find-vechicle/contact-form-vechicle/contact-form-vechicle.component';
import { ContactFormCostsComponent } from './pages/costs/contact-form-costs/contact-form-costs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PurchaseRulesComponent,
    FindVechicleComponent,
    CostsComponent,
    ContactComponent,
    AboutUsComponent,
    RealizationsComponent,
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    OpinionsComponent,
    StepsComponent,
    ContactFormVechicleComponent,
    ContactFormCostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
