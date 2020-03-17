import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../pages/interfaces/info-pagina.interface';
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class PaginaService {

  public InfoEquipo: any[] = [];
  public info: InfoPagina = {
    'titulo': 'Eventos y Soluciones',
    'email': 'comercial@eventosysoluciones.com.co',
    'nombre_corto': 'Mauricio',
    'pagina_autor': 'https://www.ortizsoft.com.co',
    'facebook': 'https://facebook.com',
    'twitter': 'https://twiter.com/johngomezda',
    'instagram': 'https:/instagram.com',
    'tublr': 'https://www.tumblr.com/',
    'equipo_trabajo': []
};
  cargada = false;

  constructor(
    private http: HttpClient
  ) {
    this.cargada = true;
    this.cargarEquipo();
   }

  cargarEquipo() {
    return this.http.get('https://angular-html-52d8a.firebaseio.com/equipo.json')
      .pipe(
        map ((response ) => {
          this.cargada = false;
          return response;
        })
      )
  }
}
