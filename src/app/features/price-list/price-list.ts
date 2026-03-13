import { Component } from '@angular/core';
import { PriceCard } from "../../shared/components/price-card/price-card";
import { PRICING_DATA, UNIT_PRICING } from '../../core/company-data';

@Component({
  selector: 'app-price-list',
  imports: [PriceCard],
  templateUrl: './price-list.html',
  styleUrl: './price-list.scss',
})
export class PriceList {
  pricing = PRICING_DATA;
  unitPricing = UNIT_PRICING;
}
