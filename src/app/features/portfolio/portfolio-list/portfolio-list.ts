import { Component } from '@angular/core';
import { PortfolioCard } from "../../../shared/components/portfolio-card/portfolio-card";
import { PORTFOLIO_DATA } from '../../../core/company-data';

@Component({
  selector: 'app-portfolio-list',
  imports: [PortfolioCard],
  templateUrl: './portfolio-list.html',
  styleUrl: './portfolio-list.scss',
})
export class PortfolioList {
  projects = PORTFOLIO_DATA;

}
