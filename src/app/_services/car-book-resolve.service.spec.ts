import { TestBed } from '@angular/core/testing';

import { CarBookResolveService } from './car-book-resolve.service';

describe('CarBookResolveService', () => {
  let service: CarBookResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarBookResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
