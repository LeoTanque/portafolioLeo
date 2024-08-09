import { Component } from '@angular/core';

@Component({
  selector: 'app-sobremi',
  standalone: true,
  imports: [],
  templateUrl: './sobremi.component.html',
  styleUrl: './sobremi.component.scss'
})
export class SobremiComponent {
  personalData = [
   // { label: 'Cumpleaños', value: '15-01-1980' },
    { label: 'Teléfono', value: '+5356819790' },
    { label: 'Email', value: 'leodanismiranda@gmail.com' },
    //{ label: 'Website', value: 'www.example.com' },
    { label: 'Dirección', value: 'Holguin, Moa, Cuba' },
    { label: 'Cargo', value: 'Desarrollador Front end' }
  ];

  interests = [
    { icon: 'fa-gamepad', name: 'JUEGOS' },
    { icon: 'fa-headphones', name: 'MUSICA' },
    { icon: 'fa-plane', name: 'VIAJAR' },
    { icon: 'fa-apple', name: 'MAC OS' },
    { icon: 'fa-person-hiking', name: 'DEPORTE' },
    { icon: 'fa-book', name: 'LIBROS' },
    { icon: 'fa-car', name: 'AUTOS' },
    { icon: 'fa-camera', name: 'FOTOS' }
  ];

  constructor() { }
}
