import { Component } from '@angular/core';
import { ProductsComponent } from "../shared/products/products.component";
import { BebidasComponent } from "../shared/products/bebidas/bebidas.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ProductsComponent, BebidasComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
