import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Skill {
  name: string;
  percentage: string;
  className: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  technicalSkills: Skill[] = [
   
    { name: 'HTML & CSS', percentage: '90%', className: 'htmlcss' },
    { name: 'JavaScript', percentage: '75%', className: 'javascript' },
    { name: 'TypeScript', percentage: '81%', className: 'typeScript' },
    { name: 'Firebase', percentage: '80%', className: 'firebase' },
    { name: 'Angular', percentage: '90%', className: 'angular' },
    { name: 'Bootstrap', percentage: '90%', className: 'bootstrap' },
    { name: 'PrimeNg', percentage: '92%', className: 'primeng' },
    { name: 'Angular Material', percentage: '55%', className: 'material' }
  ];

  professionalSkills: Skill[] = [
    { name: 'Comunicación', percentage: '80%', className: 'comunicacion' },
    { name: 'Trabajo en Equipo', percentage: '70%', className: 'trabajo' },
    { name: 'Creatividad', percentage: '99%', className: 'creatividad' },
    { name: 'Dedicación', percentage: '65%', className: 'dedicacion' },
    { name: 'Proyect Management', percentage: '94%', className: 'proyect' }
  ];
}
