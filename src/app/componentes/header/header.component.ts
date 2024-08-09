import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuVisible = false;

  mostrarOcultarMenu(): void {
    this.menuVisible = !this.menuVisible;
  }

  seleccionar(): void {
    this.menuVisible = false;
  }
}
