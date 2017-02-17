import { TestBed, inject } from '@angular/core/testing';
import { BeerHousenService } from './beer-housen.service';

describe('BeerHousenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeerHousenService]
    });
  });

  it('should ...', inject([BeerHousenService], (service: BeerHousenService) => {
    expect(service).toBeTruthy();
  }));
});
