import { Component } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Açai no copo',
      price: 15.00,
      description: 'Nossa base de açaí puro, cremosa e feita com ingredientes selecionados, é o ponto de partida para uma verdadeira explosão de sabores. Escolha entre uma variedade de frutas frescas picadas, granola crocante, leite em pó, ovomaltine, leite condensado e outros toppings deliciosos. Personalize o seu açaí e crie a combinação perfeita para o seu paladar.',
      image: '../../../assets/açai-1.jpg'
    },
    {
      id: 2,
      name: 'Açai no copo',
      price: 15.00,
      description: 'Nossa base de açaí puro, cremosa e feita com ingredientes selecionados, é o ponto de partida para uma verdadeira explosão de sabores. Escolha entre uma variedade de frutas frescas picadas, granola crocante, leite em pó, ovomaltine, leite condensado e outros toppings deliciosos. Personalize o seu açaí e crie a combinação perfeita para o seu paladar.',
      image: '../../../assets/açai-2.jpg'
    },
    {
      id: 3,
      name: 'Açai no copo',
      price: 15.00,
      description: 'Nossa base de açaí puro, cremosa e feita com ingredientes selecionados, é o ponto de partida para uma verdadeira explosão de sabores. Escolha entre uma variedade de frutas frescas picadas, granola crocante, leite em pó, ovomaltine, leite condensado e outros toppings deliciosos. Personalize o seu açaí e crie a combinação perfeita para o seu paladar.',
      image: '../../../assets/açai-3.jpg'
    },
    {
      id: 4,
      name: 'Açai no copo',
      price: 15.00,
      description: 'Nossa base de açaí puro, cremosa e feita com ingredientes selecionados, é o ponto de partida para uma verdadeira explosão de sabores. Escolha entre uma variedade de frutas frescas picadas, granola crocante, leite em pó, ovomaltine, leite condensado e outros toppings deliciosos. Personalize o seu açaí e crie a combinação perfeita para o seu paladar.',
      image: '../../../assets/açai-4.jpg'
    },
  ];

}

