import { Component } from '@angular/core';
import { ProductsComponent } from "../shared/products/products.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ProductsComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
