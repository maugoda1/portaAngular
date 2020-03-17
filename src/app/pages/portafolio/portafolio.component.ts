import { Producto } from './../interfaces/producto.interface';
import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  public productos: Producto[] = [];

  constructor(
    public productosService: ProductosService
  ) {
    productosService.cargarProductos()
      .subscribe( (resp: Producto[]) =>{
        this.productos = resp;
        // console.log(this.productos);
      } );
   }

  ngOnInit(): void {
  }

}
