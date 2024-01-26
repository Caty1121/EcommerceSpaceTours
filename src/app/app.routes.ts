import { Routes } from '@angular/router';
import { VoyagesComponent } from './voyages/voyages.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SpaceSuitesComponent } from './space-suites/space-suites.component';
import { AdventuresComponent } from './adventures/adventures.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'reservations', component: ReservationsComponent},
    {path: 'space-suites', component: SpaceSuitesComponent},
    {path: 'voyages', component: VoyagesComponent},
    {path: 'aboutUs', component: AboutUsComponent},
    {path: 'adventures', component: AdventuresComponent},
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: '/home',pathMatch:'full'}
];
