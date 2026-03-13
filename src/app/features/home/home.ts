import { afterNextRender, Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY_INFO, HERO_TITLES } from '../../core/company-data';

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
  heroTitles = HERO_TITLES;
  currentText = signal('');
  private titleIndex = 0;
  private intervalId: any;
  private chars = '!<>-_\\/[]{}—=+*^?#________'; // Znaki do losowania

  constructor() {
    afterNextRender(() => {
      this.shuffleText(this.heroTitles[this.titleIndex]);
      
      this.intervalId = setInterval(() => {
        this.titleIndex = (this.titleIndex + 1) % this.heroTitles.length;
        this.shuffleText(this.heroTitles[this.titleIndex]);
      }, 3000);
    });
  }

  private shuffleText(targetText: string) {
    let iteration = 0;
    const maxIterations = targetText.length;
    
    const interval = setInterval(() => {
      const shuffled = targetText
        .split('')
        .map((char, index) => {
          if (index < iteration) {
            return targetText[index]; // Litera odgadnięta
          }
          return this.chars[Math.floor(Math.random() * this.chars.length)]; // Losowy znak
        })
        .join('');

      this.currentText.set(shuffled);

      if (iteration >= maxIterations) {
        clearInterval(interval);
      }

      iteration += 1 / 3; // Prędkość "odgadywania" - im mniejsza liczba, tym wolniej
    }, 30);
  }

  ngOnInit() {
    // Krótkie opóźnienie, aby animacja była widoczna po hydracji
    setTimeout(() => this.isLoaded.set(true), 100);
  }
  ngOnDestroy() {
    // Zawsze czyścimy interwały, żeby nie wyciekała pamięć
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
