import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./components/home/home.component";
import {HeroesComponent} from "./components/heroes/heroes.component";
import {HeroeComponent} from "./components/heroe/heroe.component";
import {BusquedaComponent} from "./components/busqueda/busqueda.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'busqueda/:termino', component: BusquedaComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
