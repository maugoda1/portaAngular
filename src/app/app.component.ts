import { Component } from '@angular/core';
import { PaginaService } from './services/pagina.service';
import { ProductosService } from './services/productos.service';
import { Producto } from './pages/interfaces/producto.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public productos: Producto[] = [];

  constructor(
    public infoPage: PaginaService,
    public productosService: ProductosService
  ) {
    productosService.cargarProductos()
      .subscribe( (resp: Producto[]) =>{
        this.productos = resp;
        //console.log(this.productos);
      } );
  }
}
