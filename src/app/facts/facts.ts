import { Component, inject } from '@angular/core';
import { FactsService } from './facts.service';
import { Fact } from './fact/fact';

@Component({
  selector: 'app-facts',
  standalone: true,
  imports: [Fact],
  templateUrl: './facts.html',
  styleUrl: './facts.css',
})
export class Facts {
  private readonly factServices = inject(FactsService);
  getTasks() {
    return this.factServices.fetchTasks();
  }
}
