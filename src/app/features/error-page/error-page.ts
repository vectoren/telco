import { isPlatformServer } from '@angular/common';
import { Component, Inject, Optional, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error-page',
  imports: [RouterLink],
  templateUrl: './error-page.html',
  styleUrl: './error-page.scss',
})
export class ErrorPage {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Optional() @Inject(Response) private response: Response
  ) {
    // Jeśli renderujemy na serwerze, ustawiamy status 404 dla SEO
    if (isPlatformServer(this.platformId) && this.response) {
      this.response.status;
    }
  }
}
