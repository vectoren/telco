# 🌐 Telco Infrastructure Management System

### Nowoczesna platforma portfolio dla firmy teleinformatycznej.
Aplikacja zbudowana w oparciu o **Angular 21**.
**Zbieżność nazw przypadkowa.**

---

## 🚀 Główne Cechy (Core Features)

* **Angular 21 Standalone Components**: Architektura pozbawiona modułów, lekka i szybka.
* **Signals State Management**: Wykorzystanie sygnałów do zarządzania stanem menu i danych projektowych.
* **SSR & Hydration**: Pełne wsparcie dla renderowania po stronie serwera z nowym mechanizmem hydracji (Event Replay), zapewniającym błyskawiczne LCP.
* **Enterprise Design**: Nowoczesny interfejs w stylu "Deep Tech" oparty na czystym SCSS i zmiennych natywnych CSS.
* **SEO Optimized**: Dynamiczne tytuły stron, semantyczny HTML5 i struktura przyjazna robotom indeksującym.

---

## 🏗️ Struktura Projektu

Aplikacja podąża za wzorcem **Core/Shared/Features**, co zapewnia czystą separację logiki biznesowej od komponentów UI.

```text
src/app/
├── core/                # Globalne serwisy, modele i style bazowe
│   └── styles/          # Konfiguracja SCSS i zmienne CSS
├── shared/              # Reużywalne komponenty
│   └── components/
├── features/            # Moduły funkcjonalne (widoki stron)
│   ├── home/            # Strona główna 
│   ├── portfolio/       # Galeria realizacji
│   ├── price-list/      # Cennik usług
│   └── error-page/      # Obsługa błędów 404
├── app.config.ts        # Konfiguracja providerów (SSR, Router)
└── app.routes.ts        # Definicje tras
```