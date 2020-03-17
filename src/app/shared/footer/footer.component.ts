import { Component, OnInit } from '@angular/core';
import { PaginaService } from '../../services/pagina.service';
import { InfoPagina } from '../../pages/interfaces/info-pagina.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio: number = new Date().getFullYear();
  infoFooter: InfoPagina;

  constructor(
    public paginaService: PaginaService
  ) {
    this.infoFooter = this.paginaService.info;
    console.log(this.infoFooter.twitter);

   }

  ngOnInit(): void {
  }

}
