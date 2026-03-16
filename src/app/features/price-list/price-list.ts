import { Component } from '@angular/core';
import { PriceCard } from "../../shared/components/price-card/price-card";
import { COMPANY_INFO, PRICING_DATA, UNIT_PRICING } from '../../core/company-data';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-price-list',
  imports: [PriceCard, RouterLink],
  templateUrl: './price-list.html',
  styleUrl: './price-list.scss',
})
export class PriceList {
  pricing = PRICING_DATA;
  unitPricing = UNIT_PRICING;
  companyEmail = COMPANY_INFO.email;
}
