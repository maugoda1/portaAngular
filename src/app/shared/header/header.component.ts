import { Component, OnInit } from '@angular/core';
import { PaginaService } from '../../services/pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  titulo = 'Eventos';

  constructor(
    public infoPagina: PaginaService,
    private router: Router
  ) {
    this.titulo = this.infoPagina.info.titulo;
    // console.log(this.infoPagina.info.titulo);

   }

  ngOnInit(): void {
  }

  buscarProducto( value: string ) {
    // console.log(value);
    if (value.length === 0 ) {
      return;
    }
    this.router.navigate(['/search', value]);
  }
}
