import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';  
import { PlanComponent } from './plan/plan.component';
import { DietitianComponent } from './dietitian/dietitian.component';
import { PackageComponent } from './package/package.component';
import { GroupComponent } from './group/group.component';
import { RecipetypeComponent } from './recipetype/recipetype.component';
import { UnitofmeasurementComponent } from './unitofmeasurement/unitofmeasurement.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    PlanComponent,
    DietitianComponent,
    PackageComponent,
    GroupComponent,
    RecipetypeComponent,
    UnitofmeasurementComponent,
    CustomerSignupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
