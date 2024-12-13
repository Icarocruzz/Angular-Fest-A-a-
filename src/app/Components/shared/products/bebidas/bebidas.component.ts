import { Component } from '@angular/core';
import { Product } from '../../../../models/Product';

@Component({
  selector: 'app-bebidas',
  standalone: true,
  imports: [],
  templateUrl: './bebidas.component.html',
  styleUrl: './bebidas.component.scss'
})
export class BebidasComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Coca Cola',
      price: 6.00,
      description: 'Coca Cola lata 350ml',
      image: 'refri-1.jpg'
    },
    {
      id: 2,
      name: 'Fanta Uva',
      price: 6.00,
      description: 'Fanta Uva lata 350 ml',
      image: 'refri-2.jpg'
    },
  ]
}
