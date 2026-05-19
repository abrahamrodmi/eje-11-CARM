import { Component, OnInit } from '@angular/core';
import { MascotaModel } from '../../models/mascota.model';
import { MascotaService } from '../../services/mascota.service';
import { form } from '@angular/forms/signals';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-mascota',
  imports: [FormsModule],
  templateUrl: './mascota.html',
  styleUrl: './mascota.css',
})
export class Mascota implements OnInit {

  //requerimos el listado de mascotas para mostrarlo en el html, y las funciones para crear,
  mascotas: MascotaModel[] = [];


  mascota: MascotaModel = {
    id: 0,
    nombre: '',
    edad: 0
  };

  enEdicion = false; // Para controlar si estamos editando o creando una mascota 

  constructor(private mascotaService: MascotaService) { }

  ngOnInit(): void {
    this.listarMascotas();
  }

  listarMascotas(): void {
    this.mascotas = this.mascotaService.findAll();
  }

  guardarMascota():void { 
    //Objeto nuevo
    //Directamente pasarle el parametro
    //Operador ...
    if (this.enEdicion) {
      // actualizar la mascota existente
      this.mascotaService.update(this.mascota);
      this.enEdicion = false;
      this.limpiar();
      this.listarMascotas();
    } else {
      this.mascotaService.save(this.mascota);
      this.limpiar();
      this.listarMascotas();
    }
  }

  actualizarMascota(mascotaActualizar: MascotaModel) {
    //mostrar datos en el formulario
    this.mascota={...mascotaActualizar}
    this.enEdicion=true
  }

  limpiar(){
    this.mascota={  
      id:0,
      nombre:'',
      edad: 0}    
  }

  eliminarMascota(id: number){
    this.mascotaService.delete(id);
    this.listarMascotas();
  }
}
