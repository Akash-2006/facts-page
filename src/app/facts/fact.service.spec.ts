import { topics } from '../../data/news';
import { FactsService } from './facts.service';

describe('testing facts service', () => {
  it('should give tasks if we call fetch tasks', () => {
    const tasks = new FactsService();
    expect(tasks.fetchTasks()).toEqual(topics);
  });
});
