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
    console.log('Mascota creada:', mascota);
  }

  findbyId(id: number): MascotaModel | undefined {
    return this.mascotas.find(m => m.id === id);
  }
  findAll(): MascotaModel[] {
    return this.mascotas;
  }

  update(id: number, updatedMascota: MascotaModel): void {
    const index = this.mascotas.findIndex(m => m.id === id);
    if (index !== -1) {
      this.mascotas[index] = updatedMascota;
      console.log('Mascota actualizada:', updatedMascota);
    } else {
      console.log(`Mascota con ID ${id} no encontrada.`);
    }
  }

  delete(id: number): void {
    const index = this.mascotas.findIndex(m => m.id === id);
    if (index !== -1) {
      const deletedMascota = this.mascotas.splice(index, 1)[0];
      console.log('Mascota eliminada:', deletedMascota);
    } else {
      console.log(`Mascota con ID ${id} no encontrada.`);
    }
  }
}
