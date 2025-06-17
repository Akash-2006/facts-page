import { Component, inject, Input } from '@angular/core';
import { Topic } from '../../../interfaces/news';
import { FactsService } from '../facts.service';

@Component({
  selector: 'app-fact',
  imports: [],
  templateUrl: './fact.html',
  styleUrl: './fact.css',
})
export class Fact {
  @Input({ required: true }) fact?: Topic;
  private readonly factsService = inject(FactsService);
  addLike() {
    this.factsService.addLike(this.fact?.id);
  }
}
