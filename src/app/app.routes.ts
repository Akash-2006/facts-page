import { Routes } from '@angular/router';
import { WelcomePage } from './welcome-page/welcome-page';

export const routes: Routes = [
  {
    path: '',
    component: WelcomePage,
  },
  {
    path: 'Dashboard',
    loadComponent: () =>
      import('./dashboard-page/dashboard-page').then((m) => m.DashboardPage),
  },
];
