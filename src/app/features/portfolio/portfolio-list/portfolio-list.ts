import { Component } from '@angular/core';
import { PortfolioCard } from "../../../shared/components/portfolio-card/portfolio-card";
import { PORTFOLIO_DATA } from '../../../core/company-data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio-list',
  imports: [PortfolioCard, RouterLink],
  templateUrl: './portfolio-list.html',
  styleUrl: './portfolio-list.scss',
})
export class PortfolioList {
  projects = PORTFOLIO_DATA;

}
