import { Component } from '@angular/core';
import { Product } from '../../../models/Product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Açai no copo',
      price: 15.00,
      description: 'Nossa base de açaí puro, cremosa e feita com ingredientes selecionados, é o ponto de partida para uma verdadeira explosão de sabores.',
      image: 'açai-1.jpg'
    },
    {
      id: 2,
      name: 'Açai no copo',
      price: 15.00,
      description: 'Açaí no copo com camadas de banana, morango, granola crocante e coco ralado finalizado com kiwi, manga, leite condensado, calda de chocolate e amendoim.',
      image: 'açai-2.jpg'
    },
    {
      id: 3,
      name: 'Açai no copo',
      price: 15.00,
      description: 'Açaí no copo com camadas de banana, morango, granola crocante e coco ralado finalizado com kiwi, manga, leite condensado, calda de chocolate e amendoim.',
      image: 'açai-3.jpg'
    },
    {
      id: 4,
      name: 'Açai no copo',
      price: 15.00,
      description: 'Açaí no copo com camadas de banana, morango, granola crocante e coco ralado finalizado com kiwi, manga, leite condensado, calda de chocolate e amendoim.',
      image: 'açai-4.jpg'
    },
  ];

}

