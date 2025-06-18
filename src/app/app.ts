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
  private router = inject(Router);
  routes: RouteType[] = [
    { name: 'Home', path: '/', isSelected: true },
    { name: 'Facts', path: '/facts', isSelected: false },
  ];
  private periousOption: RouteType = this.routes[0];
  select(routeName: string) {
    this.periousOption.isSelected = false;
    const selectedRoute = this.routes.find((r) => r.name === routeName);
    if (selectedRoute) {
      selectedRoute.isSelected = true;
      this.periousOption = selectedRoute;
    }
  }
  ngOnInit() {
    const currentPath = this.router.url;
    const match = this.routes.find((route) => route.path === currentPath);
    if (match) {
      this.select(match.name);
    }
  }
}
