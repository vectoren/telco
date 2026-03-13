import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isMenuOpen = signal(false);

  navLinks = [
    { path: '/', label: 'Home' },
    { path: '/portfolio', label: 'Realizacje' },
    { path: '/cennik', label: 'Cennik' }
  ];

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }
}
