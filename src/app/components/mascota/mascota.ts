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
  //como inyectar el servicio de mascota para usarlo en este componente?

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
    console.log('Listar mascotas');
  }

  guardarMascota(): void {
    this.mascotaService.save(this.mascota);
    console.log('Guardar mascota');
  }

  actualizarMascota(id: number): void {

    console.log(`Actualizar mascota con ID: ${id}`);
  }

  eliminarMascota(id: number): void {

    console.log(`Eliminar mascota con ID: ${id}`);
  }
}
