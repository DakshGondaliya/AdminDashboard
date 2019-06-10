import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PlanListComponent } from '../plan-list/plan-list.component';
import { PlanComponent } from '../plan/plan.component';
import { DietitianComponent } from '../dietitian/dietitian.component';
import { AddDietitianComponent } from '../add-dietitian/add-dietitian.component';
import { PackageComponent } from '../package/package.component';
import { AddPackageComponent } from '../add-package/add-package.component';
import { GroupComponent } from '../group/group.component';
import { CustomerSignupComponent } from '../customer-signup/customer-signup.component';
import { RecipetypeComponent } from '../recipetype/recipetype.component';
import { UnitofmeasurementComponent } from '../unitofmeasurement/unitofmeasurement.component';
import { AddUomComponent } from '../add-uom/add-uom.component';
import { RecipeComponent } from '../recipe/recipe.component';
import { AddRecipeComponent } from '../add-recipe/add-recipe.component';
import { IngredientComponent } from '../ingredient/ingredient.component';
import { CustomerImportComponent } from '../customer-import/customer-import.component';
import { CustomerListComponent } from '../customer-list/customer-list.component';
import { AdminDietComponent } from '../admin-diet/admin-diet.component';
import { RecipeUnitComponent } from '../recipe-unit/recipe-unit.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RecipeFormComponent } from '../recipe-form/recipe-form.component';
import { CustomerPackageComponent } from '../customer-package/customer-package.component';

export const routes: Routes = [
    {path: 'plan-list', component: PlanListComponent },
    {path: 'plan', component: PlanComponent},
    {path: 'dietitian', component: DietitianComponent},
    {path: 'add-dietitian', component: AddDietitianComponent},
    {path: 'package', component: PackageComponent},
    {path: 'add-package', component: AddPackageComponent},
    {path: 'group', component: GroupComponent},
    {path: 'customersignup', component: CustomerSignupComponent},
    {path: 'recipetype', component: RecipetypeComponent},
    {path: 'add-recipe', component: AddRecipeComponent},
    {path: 'uom', component: UnitofmeasurementComponent},
    {path: 'add-uom', component: AddUomComponent},
    {path: 'recipe', component: RecipeComponent},
    {path: 'recipe-form', component: RecipeFormComponent},
    {path: 'ingredient', component: IngredientComponent},
    {path: 'customerimport' , component: CustomerImportComponent},
    {path: 'customerlist', component: CustomerListComponent},
    {path: 'customerpackage', component: CustomerPackageComponent},
    {path: 'admin-diet', component: AdminDietComponent},
    {path: 'recipe-unit', component: RecipeUnitComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: '', redirectTo:'/dashboard', pathMatch: 'full'}
];  