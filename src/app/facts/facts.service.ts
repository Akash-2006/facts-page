import { Injectable, signal, WritableSignal } from '@angular/core';
import { topics } from '../../data/news';
import { Topic } from '../../interfaces/news';
const store = (topics: Topic[]) => {
  localStorage.setItem('Facts', JSON.stringify(topics));
};

@Injectable({
  providedIn: 'root',
})
export class FactsService {
  data: WritableSignal<Topic[]> = signal(topics);
  constructor() {
    const local = localStorage.getItem('Facts');
    if (local) {
      this.data.set(JSON.parse(local));
    }
  }
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
      store(this.data());
    }
  }
}
