import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { Navbar } from "./shared/components/navbar/navbar";
import { Footer } from "./shared/components/footer/footer";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID); // Sprawdzamy czy to przeglądarka czy serwer
  
  isLoading = signal(false);

  constructor() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLoading.set(true);
      } else if (
        event instanceof NavigationEnd || 
        event instanceof NavigationCancel || 
        event instanceof NavigationError
      ) {
        // Ponieważ po zakończeniu nawigacji chcemy wyłączyć loader w przeglądarce:
        if (isPlatformBrowser(this.platformId)) {
          setTimeout(() => {
            this.isLoading.set(false);
          }, 400);
        } else {
          // Na serwerze wyłączamy od razu, żeby nie blokować SSR
          this.isLoading.set(false);
        }
      }
    });
  }
}
