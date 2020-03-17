import { Component, OnInit } from '@angular/core';
import { PaginaService } from '../../services/pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  titulo = 'Eventos';

  constructor(
    public infoPagina: PaginaService
  ) {
    this.titulo = this.infoPagina.info.titulo;
    // console.log(this.infoPagina.info.titulo);

   }

  ngOnInit(): void {
  }

}
