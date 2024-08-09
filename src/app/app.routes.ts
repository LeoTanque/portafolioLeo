import { Routes } from '@angular/router';
import { SobremiComponent } from './componentes/sobremi/sobremi.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { PortafolioComponent } from './componentes/portafolio/portafolio.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HomeComponent } from './componentes/home/home.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CurriculumComponent } from './componentes/curriculum/curriculum.component';


export const routes: Routes = [
   
    { path: '', component:InicioComponent },
    { path: 'sobremi', component:SobremiComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'curriculo', component:CurriculumComponent },
    { path: 'portafolio', component: PortafolioComponent },
    { path: 'contacto', component: ContactoComponent },
    // Importa el HeaderComponent como standalone
    { path: '**', redirectTo: '' }
];
