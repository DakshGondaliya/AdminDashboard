import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PlanComponent } from '../plan/plan.component';
import { DietitianComponent } from '../dietitian/dietitian.component';
import { PackageComponent } from '../package/package.component';
import { GroupComponent } from '../group/group.component';
import { CustomerSignupComponent } from '../customer-signup/customer-signup.component';
import { RecipetypeComponent } from '../recipetype/recipetype.component';
import { UnitofmeasurementComponent } from '../unitofmeasurement/unitofmeasurement.component';

export const routes: Routes = [
    {path: 'plan', component: PlanComponent},
    {path: 'dietitian', component: DietitianComponent},
    {path: 'package', component: PackageComponent},
    {path: 'group', component: GroupComponent},
    {path: 'customersignup', component: CustomerSignupComponent},
    {path: 'recipetype', component: RecipetypeComponent},
    {path: 'uom', component: UnitofmeasurementComponent},
    {path: '', redirectTo:'/plan', pathMatch: 'full'}
];  