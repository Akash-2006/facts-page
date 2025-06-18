import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
interface RouteType {
  name: string;
  path: string;
  isSelected: boolean;
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'routers';
  private readonly router = inject(Router);
  routes: RouteType[] = [
    { name: 'Home', path: '/', isSelected: true },
    { name: 'Facts', path: '/facts', isSelected: false },
  ];
}
