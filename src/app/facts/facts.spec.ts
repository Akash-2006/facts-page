import {Facts} from './facts';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FactsService} from './facts.service';

describe('Facts', () => {
     let fixture: ComponentFixture<Facts>;
        let component: Facts;

        beforeEach(async () => {
          await TestBed.configureTestingModule({
            imports: []
          }).compileComponents();

          fixture = TestBed.createComponent(Facts);
          component = fixture.componentInstance;
          fixture.detectChanges();
        });
  it('should create', () =>
    expect(true).toBeTruthy())
  it('should return data', () => {
    const service = new FactsService();
    expect(service.fetchTasks()).toEqual(service.data());
  })

})

