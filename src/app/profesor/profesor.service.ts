import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  private asignaturas = [
    {
      cod: 'COD_ASIG01',
      title: 'Nombre_asignatura_A',
      section: 'SECC_01',
      color: 'primary',
      hex: '#428cff'
    },
    {
      cod: 'COD_ASIG02',
      title: 'Nombre_asignatura_B',
      section: 'SECC_02',
      color: 'primary',
      hex: '#ddff1c'
    }  ]

  constructor() { }

  getAsignaturas() {
    return [...this.asignaturas]
  }

  getAsignatura(codAsignatura: string) {
    return {
      ...this.asignaturas.find(asignatura => {
        return asignatura.cod + asignatura.section === codAsignatura
      })
    }
  }
}