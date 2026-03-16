import { Component, computed, Input, signal } from '@angular/core';
import { PORTFOLIO_DATA } from '../../../core/company-data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio-details',
  imports: [RouterLink],
  templateUrl: './portfolio-details.html',
  styleUrl: './portfolio-details.scss',
})
export class PortfolioDetails {
  projectSlug = signal<string | null>(null);

  @Input() set slug(value: string) { // Angular mapuje :slug z URL na ten input
     this.projectSlug.set(value);
  }

  // Automatycznie wyliczamy dane projektu na podstawie sluga
  project = computed(() => {
    const currentSlug = this.projectSlug();
    if (!currentSlug) return null;
    
    return PORTFOLIO_DATA.find(p => p.slug === currentSlug) || null;
  });

}
