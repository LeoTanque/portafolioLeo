import { Component } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  standalone: true,
  imports: [],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.scss'
})
export class CurriculumComponent {
  education = [
    {
      title: 'Ingeniería Industrial',
      institution: 'Universidad Oscar Lucero Moya',
      date: 'Septiembre 2014 - Junio 2019',
      description: 'Cursé la carrera de Ingenieria Industrial en el periodo Septiembre 2014 - Junio 2019, y ya hace Hace 2 años que me encuentro capacitándome como desarrollador Front-end en el framework Angular, actualmente sumo 1 año y 4 meses de experiencia laboral, he trabajado en cuatro proyectos realizando diversos desafíos como  autenticaciones en el desarrollo de Login y Registro, asi como la creacion de servicios y plantillas dinámicas para la realización de los crud y eccomerce.'
    },
   
  ];

  experience = [
    {
      title: 'Desarrollador Front end Angular',
      company: 'Fixbeep',
      date: 'Marzo 2023 – Junio 2023',
      description: 'Desarrollo de una aplicación móvil para la gestión de servicios automotrices, utilizando Ionic y Angular. Me encargué de actualizar y corregir funcionalidades en los registros de usuarios, proveedores, operadores y sucursales, mejorando la interfaz de usuario para una experiencia más fluida y eficiente'
    },
    {
      title: 'Desarrollador Front end Angular e Ionic',
      company: ' IWOIS',
      date: 'Julio 2023 – Septiembre 2023',
      description: 'Maquetación de una aplicación móvil de asistencia médica con Ionic y Angular. Realicé la implementación de componentes interactivos y responsivos, y colaboré en el diseño de la interfaz para ofrecer tutoriales médicos, tratamientos y ubicaciones de consultas, mejorando la usabilidad y experiencia del usuario'
    },
    {
      title: 'Desarrollador Front end Angular',
      company: 'Shopping Cart Tienda Autos',
      date: 'Octubre 2023 – Diciembre 2023',
      description: 'Desarrollo de una aplicación de e-commerce para la venta de automóviles utilizando Angular y Bootstrap. Implementé la autenticación de usuarios y desarrollé el front-end completo de la aplicación, incluyendo funcionalidades de carrito de compras y pasarelas de pago, optimizando el rendimiento y la velocidad de la página'
    },
    {
      title: 'Desarrollador Front end Angular',
      company: 'Mex Material Handling',
      date: 'Diciembre 2023 – Julio 2024',
      description: 'Desarrollo de una página de administración para la gestión de materiales utilizando Angular y PrimeNg con plantillas responsivas Sakai. Implementé módulos de gestión y administración de materiales, mejorando la eficiencia operativa y asegurando la adaptabilidad de la aplicación en diferentes dispositivos'
    },
    
  ];
}
