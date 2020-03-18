import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../interfaces/producto.interface';
import { ItemProducto } from '../interfaces/item.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public item: ItemProducto;
  public idItem = '';

  constructor(
    private route: ActivatedRoute,
    public productoService: ProductosService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      console.log(params.id);
      this.idItem = params.id;
      this.productoService.cargarProducto( params.id )
        .subscribe( (resp: ItemProducto) => {
          this.item = resp;
          // console.log(this.item);
        });
    });
  }

}
