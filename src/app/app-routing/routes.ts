import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PlanComponent } from '../plan/plan.component';
import { DietitianComponent } from '../dietitian/dietitian.component';
import { PackageComponent } from '../package/package.component';

export const routes: Routes = [
    {path: '/plan', component: PlanComponent},
    {path: 'dietitian', component: DietitianComponent},
    {path: 'package', component: PackageComponent},
    {path: '', redirectTo:'/plan', pathMatch: 'full'}
];  