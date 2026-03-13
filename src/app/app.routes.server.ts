import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender, // Home page jest stała, więc prerenderujemy ją przy budowaniu
  },
  {
    path: 'cennik',
    renderMode: RenderMode.Prerender, // Cennik zmienia się rzadko
  },
  {
    path: 'portfolio',
    renderMode: RenderMode.Prerender, // Lista projektów
  },
  {
    path: 'portfolio/:slug',
    renderMode: RenderMode.Server, // SZCZEGÓŁY PROJEKTU: Renderujemy na serwerze przy każdym wejściu (SSR)
  },
  {
    path: '404',
    renderMode: RenderMode.Server, // Błędy zawsze obsługujemy po stronie serwera
  },
  {
    path: '**',
    renderMode: RenderMode.Server, // Catch-all dla nieistniejących tras
  }
];
