import { Injectable, signal, WritableSignal } from '@angular/core';
import { topics } from '../../data/news';
import { Topic } from '../../interfaces/news';

@Injectable({
  providedIn: 'root',
})
export class FactsService {
  data: WritableSignal<Topic[]> = signal(topics);
  constructor() {}
  fetchTasks(): Topic[] {
    return this.data();
  }
  addLike(id: number | undefined): void {
    if (id) {
      const currentData = this.data();
      const updatedData = currentData.map((topic) => {
        if (topic.id === id) {
          return { ...topic, likes: topic.likes + 1 };
        }
        return topic;
      });
      this.data.set(updatedData);
    }
  }
}
