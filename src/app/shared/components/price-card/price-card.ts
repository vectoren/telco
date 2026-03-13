import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-card',
  imports: [],
  templateUrl: './price-card.html',
  styleUrl: './price-card.scss',
})
export class PriceCard {
  @Input({ required: true }) data!: any;
}
