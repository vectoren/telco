import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./features/home/home').then(m => m.Home), title: 'Telco - Nowoczesna Infrastruktura IT' },
    { path: 'cennik', loadComponent: () => import('./features/price-list/price-list').then(m => m.PriceList), title: 'Cennik Usług Informatycznych' },
    { path: 'portfolio', 
        children: [
            {
                path: '',
                loadComponent: () => import('./features/portfolio/portfolio-list/portfolio-list').then(m => m.PortfolioList),
                title: 'Nasze Realizacje'
            },
            {
                path: ':slug', // Dynamiczny parametr dla konkretnego projektu
                loadComponent: () => import('./features/portfolio/portfolio-details/portfolio-details').then(m => m.PortfolioDetails)
            }
        ]
    },
    { path: '404', loadComponent: () => import('./features/error-page/error-page').then(m => m.ErrorPage), title: '404 - Nie Znaleziono Strony'},
    { path: '**', loadComponent: () => import('./features/error-page/error-page').then(m => m.ErrorPage), title: '404 - Nie Znaleziono Strony'}
];
