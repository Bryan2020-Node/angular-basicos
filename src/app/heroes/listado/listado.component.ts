import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})


export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Campitan America'];
  heroeBorrado: string = '';

  borrarHeroe(){
    console.log('borrado...');
    this.heroeBorrado = this.heroes.shift() || '';
  }
}


