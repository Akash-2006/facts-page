import { Routes } from '@angular/router';
import { WelcomePage } from './welcome-page/welcome-page';

export const routes: Routes = [
  {
    path: '',
    component: WelcomePage,
  },
  {
    path: 'facts',
    loadComponent: () => import('./facts/facts').then((m) => m.Facts),
  },
];
