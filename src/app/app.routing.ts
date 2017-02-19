import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {SearchComponent} from "./search/search.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {UserComponent} from "./user/user.component";

const routes:Routes = [
    {path:'', component: HomeComponent},
    {path:'search', component: SearchComponent},
    {path:'dashboard', component: DashboardComponent},
    {path:'user/:id', component: UserComponent},
    {path:'**', redirectTo: ''}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);