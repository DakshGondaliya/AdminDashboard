import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

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
import { RecipeComponent } from './recipe/recipe.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { AdminDietComponent } from './admin-diet/admin-diet.component';
import { CustomerImportComponent } from './customer-import/customer-import.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { PlanListComponent } from './plan-list/plan-list.component';
import { AddDietitianComponent } from './add-dietitian/add-dietitian.component';
import { AddUomComponent } from './add-uom/add-uom.component';

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
    RecipeComponent,
    IngredientComponent,
    AdminDietComponent,
    CustomerImportComponent,
    CustomerListComponent,
    PlanListComponent,
    AddDietitianComponent,
    AddUomComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
