import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductoServiceService{
  constructor(private http:HttpClient) {}
  listar():any {
    return this.http.get('http://localhost/myCRUD/src/api/productos.php?opcion=1');
  }
  detallar(id: number):any {
    return this.http.get('http://localhost/myCRUD/src/api/productos.php?opcion=2&id=' + id);
  }
  guardar(item: Object):any {
    return this.http.post('http://localhost/myCRUD/src/api/productos.php?opcion=3', item);
  } 
  modificar(item: Object):any {
    return this.http.post('http://localhost/myCRUD/src/api/productos.php?opcion=4', item);
  }
  eliminar(id: number):any {
    return this.http.get('http://localhost/myCRUD/src/api/productos.php?opcion=5&id=' + id);
  }
}