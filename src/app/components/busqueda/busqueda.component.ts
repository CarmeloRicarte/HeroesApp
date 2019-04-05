import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Heroe, HeroesService} from "../../servicios/heroes.service";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent implements OnInit {
  termino: string;
  heroes: Heroe[] = [];

  constructor(private _activatedRoute: ActivatedRoute,
              private _router: Router,
              private _heroesService: HeroesService) {
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.termino = params.termino;
      this.heroes = this._heroesService.buscarHeroes(this.termino);
    })
  }

    verHeroe(idx: number) {
      this._router.navigate(['/heroe', idx]);
    }
  }
