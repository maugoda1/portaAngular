import { Component, OnInit } from '@angular/core';
import { PaginaService } from 'src/app/services/pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public infoEquipo: any[] = [];

  constructor(
    public infoPagina: PaginaService
  ) {
    this.infoPagina.cargarEquipo()
      .subscribe( (resp: any[]) => {
        this.infoEquipo = resp;
        // console.log(this.infoEquipo);
      });
   }

  ngOnInit(): void {

  }

}
