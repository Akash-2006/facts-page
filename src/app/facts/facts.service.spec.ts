import { FactsService } from './facts.service';
import { Topic } from '../../interfaces/news';
import { topics } from '../../data/news';

describe('FactsService', () => {
  beforeEach(() => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), 'setItem');
    jest.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem');
    jest.spyOn(Object.getPrototypeOf(window.localStorage), 'removeItem');
  });

  afterEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  it('should be created', () => {
    const service = new FactsService();
    expect(service).toBeTruthy();
  });

  it('should return data', () => {
    const service = new FactsService();
    expect(service.fetchTasks()).toEqual(service.data());
  });

  it('should add like', () => {
    const service = new FactsService();
    service.addLike(1);
    expect(service.fetchTasks()[0].likes).toEqual(1);
  });

  // New test cases for localStorage functionality
  it('should initialize with data from localStorage if it exists', () => {
    const mockStorageData: Topic[] = [
      { id: 1, title: 'Test Topic', description: 'Test Description', likes: 5,genre:'killer',source:'https://www.google.com'}
    ];
    localStorage.setItem('Facts', JSON.stringify(mockStorageData));

    const service = new FactsService();
    expect(service.data()).toEqual(mockStorageData);
    expect(localStorage.getItem).toHaveBeenCalledWith('Facts');
  });

  it('should initialize with default topics if localStorage is empty', () => {
    localStorage.clear();
    const service = new FactsService();
    expect(service.data()).toEqual(topics);
    expect(localStorage.getItem).toHaveBeenCalledWith('Facts');
  });
});
