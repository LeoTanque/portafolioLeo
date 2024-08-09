import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SobremiComponent } from '../sobremi/sobremi.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { PortafolioComponent } from '../portafolio/portafolio.component';
import { CurriculumComponent } from '../curriculum/curriculum.component';
import { SkillsComponent } from '../skills/skills.component';
import { InicioComponent } from '../inicio/inicio.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
