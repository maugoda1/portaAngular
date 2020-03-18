import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = false;
  idItem = '';

  constructor(
    private http: HttpClient
  ) {
    this.cargando = true;
    this.cargarProductos();
   }

   cargarProductos() {
    return this.http.get('https://angular-html-52d8a.firebaseio.com/productor_idx.json')
      .pipe(
        map ((resp ) => {
          //console.log(resp);
          this.cargando = false;
          return resp;
        })
      )
  }

  cargarProducto(id: string) {
    this.idItem = id;
    return this.http.get('https://angular-html-52d8a.firebaseio.com/productos/' + id + '.json')
      .pipe(
        map ((resp ) => {
          //console.log(resp);
          this.cargando = false;
          return resp;
        })
      )
  }

}
