import { ProductoServiceService } from './../../services/producto-service.service';
import { Component, OnInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
//import "rxjs/add/operator/map";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  filterargs;
  pcompra;
  listado;
  items;
  itemsel;

  constructor(private crudProducto: ProductoServiceService, private slim: SlimLoadingBarService) { }

  ngOnInit() {
    this.listarproductos();
    this.slim.start();
  }

  listarproductos() {
    this.slim.stop();
    this.crudProducto.listar()
      //.map((response) => response.json())
      .subscribe((data) => {
        this.listado = data;
        this.slim.complete();
      });
  }

  confirmacion(item: any) {
    console.log("Se va a eliminar!");
    console.log(item);
    this.itemsel = item;
  }

  borrar() {
    console.log("metodo borrar");
    console.log(this.itemsel);
    
    this.crudProducto.eliminar(this.itemsel.idproducto)
      //.map((response) => response.json())
      .subscribe((data) => {
        this.listarproductos();
      });
  }

}
