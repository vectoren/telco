import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY_INFO } from '../../core/company-data';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  // Sygnał do wyzwolenia animacji po załadowaniu
  isLoaded = signal(false);
  company = COMPANY_INFO;
  

  ngOnInit() {
    // Krótkie opóźnienie, aby animacja była widoczna po hydracji
    setTimeout(() => this.isLoaded.set(true), 100);
  }
}
