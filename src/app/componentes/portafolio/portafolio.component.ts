import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Project {
  imgSrc: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.scss'
})
export class PortafolioComponent {

  projects: Project[] = [
    { imgSrc: 'assets/img/logofixbeep.jpeg', title: 'Fixbeep', description: 'Fotografía' },
    { imgSrc: 'assets/img/logoiwois.png', title: 'IWOIS', description: 'Fotografía' },
    { imgSrc: 'assets/img/compraenlinea.png', title: 'Tienda de Autos', description: 'Fotografía' },
    { imgSrc: 'assets/img/fondo1.jpg', title: 'Mex Material Handling', description: 'Fotografía' },
 
    
  ];

}
