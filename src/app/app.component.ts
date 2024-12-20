import { Component, model } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/shared/header/header.component';
import { MenuComponent } from './Components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./Components/shared/footer/footer.component";
import { BebidasComponent } from './Components/shared/products/bebidas/bebidas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    MenuComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fest-acai';
}
