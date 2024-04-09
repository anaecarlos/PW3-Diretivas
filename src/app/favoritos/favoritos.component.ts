import { Component } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent {
  professores: any[]= [
    {"nome": "Marion", "favorito":true},
    {"nome": "Rogério", "favorito":true},
    {"nome": "Marco", "favorito":false},
    {"nome": "Victor", "favorito":false},
    {"nome": "Roberto", "favorito":true}
  ];


}

