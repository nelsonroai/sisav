import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'md-paper-plane',
      name: 'Lista Proyectos',
      redirectTo: '/listaproyectos'
    },
    {
      icon: 'md-paper-plane',
      name: 'Ejecucion Proyectos 2019',
      redirectTo: '/ejecucionproyectos'
    },
    {
      icon: 'ios-paper',
      name: 'Lista Programas VcM',
      redirectTo: '/listaprogramas'
    },
    {
      icon: 'ios-paper',
      name: 'Ejecucion Programas 2019',
      redirectTo: '/ejecucionprogramas'
    },
    {
      icon: 'md-list',
      name: 'Lista Extensión',
      redirectTo: '/listaextension'
    },
    {
      icon: 'md-list',
      name: 'Ejecucion Extensión 2019',
      redirectTo: '/ejecucionextension'
    },
    {
      icon: 'md-settings',
      name: 'Hitos/Actividades 2019',
      redirectTo: '/actividades'
    },
    {
      icon: 'md-cash',
      name: 'Memorandum',
      redirectTo: '/financiamiento'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
