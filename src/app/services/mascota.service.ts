import { Injectable } from '@angular/core';
import { MascotaModel } from '../models/mascota.model';

@Injectable({
  providedIn: 'root',
})
export class MascotaService {

  mascotas: MascotaModel[] = [];
  idContador: number = 0; // Para asignar IDs únicos a las mascotas

  constructor() {
    //inicializar con algunas mascotas de ejemplo
    this.mascotas = [
      { id: 1, nombre: 'Firulais', edad: 3 },
      { id: 2, nombre: 'Michi', edad: 2 },
      { id: 3, nombre: 'Rex', edad: 5 },
      { id: 4, nombre: 'Luna', edad: 1 },
    ];
    this.idContador = this.mascotas.length + 1; // Iniciar el contador de ID
  }

  save(mascota:MascotaModel): void {
    mascota.id = this.idContador++; 
    this.mascotas.push(mascota);
  }

  findbyId(id: number): MascotaModel | undefined {
    return this.mascotas.find(m => m.id === id);
  }
  findAll(): MascotaModel[] {
    return this.mascotas;
  }


  update(updatedMascota: MascotaModel) {
    const index = this.mascotas.findIndex((mascota) => mascota.id === updatedMascota.id);
    if (index === -1) {
      return;
    }
    this.mascotas[index] = { ...this.mascotas[index], ...updatedMascota };
  }

  delete(id:number) {
    // eliminar por id y actualizar el arreglo de mascotas
    this.mascotas = this.mascotas.filter((mascota) => mascota.id !== id);
    }
    
  }

