import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule } from '@angular/common';

// import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { RecipeUnitComponent } from './recipe-unit/recipe-unit.component';

import {SignupServiceService} from './customer-signup/signup-service.service';
import {CustomerService} from './customer-list/customer.service';
import { AddPackageComponent } from './add-package/add-package.component';
import { PackageService } from './add-package/package.service';
import { PackagelistService } from './package/packagelist.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UomService } from './add-uom/uom.service';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeService } from './add-recipe/recipe.service';
import { RecipetypeService } from './recipetype/recipetype.service';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { CustomerPackageComponent } from './customer-package/customer-package.component';
import { FormService } from './recipe-form/form.service';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';
import { AddingredientService } from './add-ingredient/addingredient.service';
import { IngredientService } from './ingredient/ingredient.service';
import { CustomerimportlistComponent } from './customerimportlist/customerimportlist.component';
import { ImportService } from './customer-import/import.service';
import { CustomerimportlistService } from './customerimportlist/customerimportlist.service';
import { RecipeunitService } from './recipe-unit/recipeunit.service';
import { AdmindietEditComponent } from './admindiet-edit/admindiet-edit.component';
// import { MyfilterPipe } from './myfilter.pipe'; 

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
    RecipeUnitComponent,
    AddPackageComponent,
    DashboardComponent,
    AddRecipeComponent,
    RecipeFormComponent,
    CustomerPackageComponent,
    AddIngredientComponent,
    CustomerimportlistComponent,
    AdmindietEditComponent,
    // MyfilterPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    SignupServiceService,
    CustomerService,
    PackageService,
    PackagelistService,
    UomService,
    RecipeService,
    RecipetypeService,
    FormService,
    AddingredientService,
    IngredientService,
    ImportService,
    CustomerimportlistService,
    RecipeunitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
