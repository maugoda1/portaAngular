import { Producto } from './../interfaces/producto.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  termino = '';
  productosFiltrados: Producto[] = [];

  constructor(
    private route: ActivatedRoute,
    public productosService: ProductosService
  ) {

    this.route.params.subscribe( (params: any) => {
      this.termino = params['termino'];
    });

   }

  ngOnInit(): void {
    this.buscarProducto(this.termino);
  }

  buscarProducto( termino: string ) {
    termino = termino.toLowerCase();
    this.productosService.cargarProductos()
    .subscribe( (resp: Producto[]) => {
      resp.forEach( item => {
        if (item.categoria.indexOf(termino) >= 0 || item.titulo.indexOf( termino ) >= 0) {
          console.log(termino);
          this.productosFiltrados.push(item);
        }
      });
      console.log(this.productosFiltrados);
    });
  }
}
