import { Component } from '@angular/core';
import {exampleProducts} from '@badcompany/products';

@Component({
  selector: 'badcompany-root',
  template: `
    <badcompany-banner title="Welcome to the store!"></badcompany-banner>
    <ul>
      <li *ngFor="let product of products">
        <strong>{{product.name}}</strong>Price : {{product.price}}
      </li>
    </ul>
  `
})
export class AppComponent {
  products = exampleProducts;
}
